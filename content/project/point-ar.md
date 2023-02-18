---
title: "PointAR: Efficient Lighting Estimation for Mobile Augmented Reality"
date: 2020-08-25
thumbnail: /assets/img/project/point-ar/thumbnail.png
tag: research
layout: default
---

<!-- Insert a header image here. -->

![](/assets/img/project/point-ar/title-bg.svg){.dark:invert}

<!-- Document starts here, please first insert a title component. -->

::ProjectHeader
---
title: "PointAR: Efficient Lighting Estimation for Mobile Augmented Reality"
headerImage:
venue: ECCV 2020
videoLink: https://www.youtube.com/embed/Mg-dFJRPSH4
authors:
    - name: Yiqin Zhao
      url: https://yiqinzhao.me
      affiliation: Worcester Polytechnic Institute
    - name: Tian Guo
      url: https://tianguo.info
      affiliation: Worcester Polytechnic Institute
artifactLinks:
    arXiv: https://arxiv.org/abs/2004.00006
    Paper: https://link.springer.com/chapter/10.1007/978-3-030-58592-1_40
    Poster: /assets/img/project/point-ar/poster.png
    Video: https://www.youtube.com/watch?v=Mg-dFJRPSH4
    Slides: https://drive.google.com/file/d/1NUHDf3uxNuXwvqFjXw6BGFADgQdOc9tp/view?usp=sharing
    Code: https://github.com/cake-lab/PointAR
---
::

## Abstract

We propose an efficient lighting estimation pipeline that is suitable to run on modern mobile devices, with comparable resource complexities to state-of-the-art on-device deep learning models. Our pipeline, referred to as PointAR, takes a single RGB-D image captured from the mobile camera and a 2D location in that image, and estimates a 2nd order spherical harmonics coefficients which can be directly utilized by rendering engines for indoor lighting in the context of augmented reality. Our key insight is to formulate the lighting estimation as a learning problem directly from point clouds, which is in part inspired by the Monte Carlo integration leveraged by real-time spherical harmonics lighting. While existing approaches estimate lighting information with complex deep learning pipelines, our method focuses on reducing the computational complexity. Through both quantitative and qualitative experiments, we demonstrate that PointAR achieves lower lighting estimation errors compared to state-of-the-art methods. Further, our method requires an order of magnitude lower resource, comparable to that of mobile-specific DNNs.


## ECCV'20 Paper

**PointAR: Efficient Lighting Estimation for Mobile Augmented Reality**

*Yiqin Zhao and Tian Guo*

[**![](/assets/img/project/point-ar/arxiv-paper-thumbnails.png)**](https://arxiv.org/abs/2004.00006)

```bibtex
@InProceedings{pointar_eccv2020,
    author="Zhao, Yiqin
    and Guo, Tian",
    title="PointAR: Efficient Lighting Estimation for Mobile Augmented Reality",
    booktitle="European Conference on Computer Vision (ECCV)",
    year="2020",
}
```

We propose an efficient lighting estimation pipeline that is suitable to run on modern mobile devices, with comparable resource complexities to state-of-the-art on-device deep learning models. Our pipeline, referred to as PointAR, takes a single RGB-D image captured from the mobile camera and a 2D location in that image, and estimates a 2nd order spherical harmonics coefficients which can be directly utilized by rendering engines for indoor lighting in the context of augmented reality. Our key insight is to formulate the lighting estimation as a learning problem directly from point clouds, which is in part inspired by the Monte Carlo integration leveraged by real-time spherical harmonics lighting. While existing approaches estimate lighting information with complex deep learning pipelines, our method focuses on reducing the computational complexity. Through both quantitative and qualitative experiments, we demonstrate that PointAR achieves lower lighting estimation errors compared to state-of-the-art methods. Further, our method requires an order of magnitude lower resource, comparable to that of mobile-specific DNNs.

---

## HotMobile'20 Poster

**PointAR: Efficient Lighting Estimation for Mobile Augmented Reality**

*Yiqin Zhao and Tian Guo*

International Workshop on Mobile Computing Systems and Applications (HotMobile'20), Poster

![](/assets/img/project/point-ar/poster.png)

[**![](/assets/img/project/point-ar/poster-paper-thumbnails.png)**](https://hotmobile.org/2020/downloads/hotmobile20-Zhao.pdf)


```bibtex
@article{pointar_hotmobile2020,
  title={PointAR: Efficient Lighting Estimation for Mobile Augmented Reality},
  author={Yiqin Zhao and Tian Guo},
  journal={International Workshop on Mobile Computing Systems and Applications (HotMobile'20)},
  year={2020},
}
```

## Acknowledgement

This work is supported in part by National Science Foundation grants #1755659 and #1815619.

::MoreProjects
---
title: Related Projects
links:
  - /project/xihe
---
::
