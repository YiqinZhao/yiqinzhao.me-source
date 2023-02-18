---
title: "Privacy-preserving Reflection Rendering for Augmented Reality"
date: 2022-07-08
thumbnail: /assets/img/project/privacy-preserving-reflection/thumbnail.png
tag: research
layout: default
---

::ProjectHeader
---
title: "Privacy-preserving Reflection Rendering for Augmented Reality"
venue: ACM Multimedia 2022
authors:
    - name: Yiqin Zhao
      url: https://yiqinzhao.me
      affiliation: Worcester Polytechnic Institute
    - name: Sheng Wei
      url: http://eceweb1.rutgers.edu/~sw891/
      affiliation: Rutgers University
    - name: Tian Guo
      url: https://tianguo.info
      affiliation: Worcester Polytechnic Institute
artifactLinks:
    arXiv: https://arxiv.org/pdf/2207.03056.pdf
    Slides: https://1drv.ms/p/s!AoSPO4UGy118lLJvuTFPetG2NDtdtw?e=ZtQYWm
    Code (coming soon): /project/privacy-preserving-reflection/
headline: 📢 code release coming soon!
---
::

![](/assets/img/project/privacy-preserving-reflection/teaser.png)

## Abstract

Many augmented reality (AR) applications rely on omnidirectional environment lighting to render photorealistic virtual objects.
When the virtual objects consist of reflective materials, such as a metallic sphere, the required lighting information to render such objects can consist of privacy-sensitive information that is outside the current camera view.
In this paper, we show, for the first time, that accuracy-driven multi-view environment lighting can reveal out-of-camera scene information and compromise privacy.
We present a simple yet effective privacy attack that extracts sensitive scene information such as human face and text information from the rendered objects, under a number of application scenarios.

To defend against such attacks, we develop a novel $IPC^{2}S$ defense and a conditional $R^2$ defense.
Our $IPC^{2}S$ defense, used in conjunction with a generic lighting reconstruction method, preserves the scene geometry while obfuscating the privacy-sensitive information.
As a proof-of-concept, we leverage existing OCR and face detection models to identify text and human faces from past camera observations and blur the color pixels associated with detected regions.
We evaluate the visual quality impact of our defense by comparing rendered virtual objects to ones rendered with a generic multi-lighting reconstruction technique, ARKit, and $R^2$ defense.
Our visual and quantitative results demonstrate that our defense leads to structurally similar reflections with up to 0.98 SSIM score across a variety of rendering scenarios while preserving sensitive information by reducing the automatic extraction success rate to at most 8.8%.

## Reflection-based Privacy Issue

![](/assets/img/project/privacy-preserving-reflection/workflow.png)

## Acknowledgements
We thank the anonymous reviewers for their constructive reviews. This work was supported in part by NSF Grants and VMWare.

::MoreProjects
---
title: Related Projects
links:
  - /project/litar
  - /project/xihe
  - /project/point-ar
---
::
