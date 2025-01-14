//VERSION=3
//NDVI as unsigned 8-bit integer (byte) [range: 0-255]

function setup() {
    return {
        input: [{ // this sets which bands to use
            bands: ["B04", "B08", "SCL"]
            }],
        output: { // this defines the output image type
            bands: 1,
            sampleType: "FLOAT32"
        }
    };
}

function evaluatePixel(sample) {
  // this computes the NDVI value
    let ndvi = (sample.B08 - sample.B04) / (sample.B08 + sample.B04);
    if ([2, 4, 5, 10].includes(sample.SCL)) {
      // mask out all cloud, cloud shadow, water, snow
      return [ ndvi ];
    } else {
      return [NaN];
    };
}

