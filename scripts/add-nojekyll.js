import { promises as fs } from 'fs'
import { resolve } from 'path'

async function addNoJekyll() {
    const publicDir = resolve(process.cwd(), 'public') // adjust if your output dir differs
    const filePath = resolve(publicDir, '.nojekyll')
    await fs.writeFile(filePath, '')
    console.log('.nojekyll file created in', publicDir)
}
addNoJekyll()
