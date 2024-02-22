//VERSION=3

function setup() {
    return {
        input: [{ // this sets which bands to use
            bands: ["B10"]
            }],
        output: { // this defines the output image type
            bands: 1,
            sampleType: "FLOAT32",
            nodataValue: 0
        }
    };
}

function evaluatePixel(sample) {
    var value = sample.B10;
    if (value != 0) {
      str = (1 - value)**2 / (2*value);
    } else {
      str = 0
    };
    return [ str ];
}
