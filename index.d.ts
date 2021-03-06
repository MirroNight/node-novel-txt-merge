/**
 * Created by user on 2018/1/28/028.
 */
import { IReturnList } from 'node-novel-globby';
import BluebirdPromise = require('bluebird');
import { IMdconfMeta } from 'node-novel-info';
/**
 *
 * @param inputPath 輸入路徑
 * @param outputPath 輸出路徑
 * @param outputFilename 參考用檔案名稱
 * @param noSave 不儲存檔案僅回傳 txt 內容
 */
export declare function txtMerge(inputPath: string, outputPath: string, outputFilename?: string, noSave?: boolean): BluebirdPromise<{
    filename: string;
    fullpath: string;
    data: string;
}>;
export declare function getMetaTitles(meta: IMdconfMeta): string[];
/**
 * 回傳處理後的檔案名稱
 */
export declare function makeFilename(meta?: IMdconfMeta, outputFilename?: string, a?: string[], _ls?: IReturnList, _argv?: {
    TXT_PATH?: string;
}): string;
export default txtMerge;
