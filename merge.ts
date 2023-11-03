// merge.ts
export function merge(collection_1: number[], collection_2: number[]): number[] {
    let merged: number[] = [];
    let i = 0;
    let j = 0;

    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            merged.push(collection_1[i++]);
        } else {
            merged.push(collection_2[j++]);
        }
    }

    // Add any remaining elements from collection_1
    while (i < collection_1.length) {
        merged.push(collection_1[i++]);
    }

    // Add any remaining elements from collection_2
    while (j < collection_2.length) {
        merged.push(collection_2[j++]);
    }

    return merged;
}