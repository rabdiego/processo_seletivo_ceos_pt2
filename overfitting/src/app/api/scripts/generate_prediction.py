from gluoncv import model_zoo, data, utils
from gluoncv.data.transforms.pose import detector_to_simple_pose, heatmap_to_coord
from sys import argv
from cv2 import imwrite, cvtColor, COLOR_BGR2RGB

detector = model_zoo.get_model('yolo3_mobilenet1.0_coco', pretrained=True)
pose_net = model_zoo.get_model('simple_pose_resnet18_v1b', pretrained=True)

detector.reset_class(["person"], reuse_weights=['person'])

im_fname = argv[1]

x, img = data.transforms.presets.ssd.load_test(im_fname, short=512)
print('Shape of pre-processed image:', x.shape)

class_IDs, scores, bounding_boxs = detector(x)

pose_input, upscale_bbox = detector_to_simple_pose(img, class_IDs, scores, bounding_boxs)

predicted_heatmap = pose_net(pose_input)
pred_coords, confidence = heatmap_to_coord(predicted_heatmap, upscale_bbox)

print(pred_coords)


pred_img = utils.viz.cv_plot_keypoints(img, pred_coords, confidence,
                              class_IDs, bounding_boxs, scores,
                              box_thresh=0.5, keypoint_thresh=0.2)

pred_img = cvtColor(pred_img, COLOR_BGR2RGB)

imwrite(argv[1], pred_img)