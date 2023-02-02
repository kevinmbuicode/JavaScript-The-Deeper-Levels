// In this case, we translate and read the files(JS files) line by line and interpret it into Bytecode.

function sumCalculation(x, y) {
    return x + y;
}

for (let i = 0; i < 1000; i++) {
    sumCalculation(5, 4);
}

// This will go line by line in interpretion.

// PROS WITH USING INTERPRETERS
// 1. Quick to get up and run.

// CONS
// Comparatively slow when the codebase is huge, especially when looping.