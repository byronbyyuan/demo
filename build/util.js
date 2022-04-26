/**
 * @file util
 * @author byronbyyuan <14138993@qq.com>
 */

import path from 'path'

export function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

export function assetsPath (_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
}
