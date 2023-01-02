export function getInsertionSortAnimations(arr) {
    const animations = [];
    if(arr.length <= 1)
        return arr;
    const aux = arr.slice();
    insertionSortHelper(arr, aux, animations);
    return animations;

    function insertionSortHelper(
        mainArray,
        auxArray,
        animations,
    ) {
        if(mainArray.length <= 1) return;
        for(let i = 1; i < mainArray.length; ++i) {
            let key = auxArray[i];
            let j = i - 1;
            if(auxArray[j] <= key) {
                addNotSwap(auxArray, j, i, animations);
                continue;   
            }
            while(j >= 0 && auxArray[j] > auxArray[j+1]) {

                swap(auxArray, j, j + 1, animations);
                j--;
            }
            auxArray[j + 1] = key;  
        }
    }

    function addNotSwap(arr, i, j,animations) {
        animations.push([i, j]);
        animations.push([i, j]);
        animations.push([i, arr[i]]);
        animations.push([j, arr[j]]);
    }

    function swap(arr, i, j,animations) {
        animations.push([i, j]);
        animations.push([i, j]);    
        animations.push([i, arr[j]]);
        animations.push([j, arr[i]]);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}