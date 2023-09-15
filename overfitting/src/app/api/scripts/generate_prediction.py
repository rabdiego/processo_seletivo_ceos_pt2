from cv2 import imread, flip, imwrite
from sys import argv

path = argv[1]
img = imread(path)
print(img.shape)
img = flip(img, 0)

imwrite(path, img)
