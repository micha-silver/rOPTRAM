---
output: github_document
bibliography: bibliography.bib  
---

<!-- README.md is generated from README.Rmd. Please edit that file -->



# rOPTRAM

<!-- badges: start -->
[![Project Status: WIP](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
<!-- badges: end -->

`rOPTRAM` implements The OPtical TRapezoid Model (OPTRAM) 
  to derive soil moisture based on the linear relation
  between a vegetation index, i.e. NDVI, and Land Surface Temperature (LST).
  
  The Short Wave Infra-red (SWIR) band is used as a proxy for LST.
  
  See @sadeghi_optical_2017


## Installation

`rOPTRAM` resides on gitlab.
You can install the development version of rOPTRAM like so:

``` r
# Install remotes package
if (! require("remote")) {
  install.packages("remotes")
}
remotes::install_gitlab("https://gitlab.com/rsl-bidr/roptram.git")
```

## Example

This is a basic example which shows you how to solve a common problem:


```r
# library(rOPTRAM)
## basic example code
```


You'll still need to render `README.Rmd` regularly, to keep `README.md` up-to-date. `devtools::build_readme()` is handy for this. You could also use GitHub Actions to re-render `README.Rmd` every time you push. An example workflow can be found here: <https://github.com/r-lib/actions/tree/v1/examples>.
