/**
 * 前後の空白を削除し、末尾に敬称を付与する関数
 * @param {string} name 名前
 * @param {string} honorific 敬称
 * @returns {string} 敬称付きの名前
 */
export const trimAndAddHonorific = (name: string, honorific: string = '様'): string => {

    // 名前の前後の空白を削除
    const trimmedName = name.trim();
    if (!trimmedName) {
        // 名前が空の場合は空文字を返す
        return '';
    }

    // すでに敬称が付与されている場合はそのまま返す
    if (trimmedName.endsWith(honorific)) {
        return trimmedName;
    }

    // 敬称を付与して返す
    return `${trimmedName} ${honorific}`;
}
