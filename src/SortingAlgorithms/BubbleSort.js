export function getBubbleSortAnimations(arr) {
    const animations = [];
    if(arr.length <= 1)
        return arr;
    const aux = arr.slice();
    bubbleSortHelper(arr, aux, animations);
    return animations;

    function bubbleSortHelper(
        mainArray,
        auxArray,
        animations,
    ) {
        if(mainArray.length <= 1) return;
        for(let i = 0; i < mainArray.length; ++i) {
            for(let j = 0; j < mainArray.length - i - 1; ++j) {
                animations.push([j, j + 1]);
                animations.push([j, j + 1]);
                if(auxArray[j] > auxArray[j + 1]) {
                    animations.push([j, auxArray[j + 1]]);
                    animations.push([j+1, auxArray[j]]);
                    [auxArray[j], auxArray[j + 1]] = [auxArray[j + 1], auxArray[j]];
                } else {
                    animations.push([j, auxArray[j]]);
                    animations.push([j+1, auxArray[j + 1]]);
                }
            }
        }
    }
}
