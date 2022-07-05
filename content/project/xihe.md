<iframe style="width: 100%; height: min(50vw, 600px); margin: 0 auto 2rem auto; display: block;" src="https://www.youtube.com/embed/ovTUDxt86mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Abstract

Omnidirectional lighting provides the foundation for achieving spatially-variant photorealistic 3D rendering, a desirable property for mobile augmented reality applications. However, in practice, estimating omnidirectional lighting can be challenging due to limitations such as partial panoramas of the rendering positions, and the inherent environment lighting and mobile user dynamics. A new opportunity arises recently with the advancements in mobile 3D vision, including built-in high-accuracy depth sensors and deep learning-powered algorithms, which provide the means to better sense and understand the physical surroundings. Centering the key idea of 3D vision, in this work, we design an edge-assisted framework called Xihe to provide mobile AR applications the ability to obtain accurate omnidirectional lighting estimation in real time.

Specifically, we develop a novel sampling technique that efficiently compresses the raw point cloud input generated at the mobile device. This technique is derived based on our empirical analysis of a recent 3D indoor dataset and plays a key role in our 3D vision-based lighting estimator pipeline design. To achieve the real-time goal, we develop a tailored GPU pipeline for on-device point cloud processing and use an encoding technique that reduces network transmitted bytes. Finally, we present an adaptive triggering strategy that allows Xihe to skip unnecessary lighting estimations and a practical way to provide temporal coherent rendering integration with the mobile AR ecosystem. We evaluate both the lighting estimation accuracy and time of Xihe using a reference mobile application developed with Xihe's APIs. Our results show that Xihe takes as fast as 20.67ms per lighting estimation and achieves 9.4% better estimation accuracy than a state-of-the-art neural network.

# MobiSys'21 Paper

**Xihe: A 3D Vision-based Lighting Estimation Framework for Mobile Augmented Reality**

*Yiqin Zhao and Tian Guo*

[**![](./arxiv-paper-thumbnails.png)**](https://github.com/cake-lab/Xihe/blob/main/xihe_mobisys21.pdf)

```bibtex
@InProceedings{xihe_mobisys2021,
    author="Zhao, Yiqin
    and Guo, Tian",
    title="Xihe: A 3D Vision-based Lighting Estimation Framework for Mobile Augmented Reality",
    booktitle="The 19th ACM International Conference on Mobile Systems, Applications, and Services",
    year="2021",
}
```

# Acknowledgement

We thank all anonymous reviewers, our shepherd, and our artifact evaluator Tianxing Li for their insight feedback.
This work was supported in part by NSF Grants #1755659 and #1815619.
