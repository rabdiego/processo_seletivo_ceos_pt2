import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'

export async function POST(request : NextRequest) {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
        return NextResponse.json({success : false})
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = join('./', 'public/tmp', 'tmpImg.png')
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    const { exec } = require('child_process')

    exec(`python3 src/app/api/scripts/generate_prediction.py ${path}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }

        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })

    console.log(`open ${path} to see the uploaded file`)

    return NextResponse.json({success : true})
}