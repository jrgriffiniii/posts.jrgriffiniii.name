---
title: "music21, spleeter, and TensorFlow for Music Transcription"
date: "2022-01-06T00:00:00.0Z"
description: "Discussion for music recognition in TensorFlow"
---

As an experiment with TensorFlow, I have begun experimenting with a Jupyter
Notebook using Google Colab. At the moment, this can be readily accessed and
utilized with an experimental branch `music-transcription` I have from a public repository:

<script src="https://gist.github.com/jrgriffiniii/19743eb14388a06bc59cd19e34ff920b.js"></script>
`gist:jrgriffiniii/19743eb14388a06bc59cd19e34ff920b`

This essentially uses a combination of the
[SPICE](https://ai.googleblog.com/2019/11/spice-self-supervised-pitch-estimation.html)
model for the TensorFlow framework. Authored by Beat Gfeller, Christian Frank,
Dominik Roblek, Matt Sharifi, Marco Tagliasacchi and Mihajlo Velimirović, this
provided a phenomenal exercise in attempting to identify and isolate tones into
musical notes.

The Notebook then additionally uses the
[music21](https://github.com/cuthbertLab/music21) Python package in order to
provide a transcription of the samples provided. The learning curve for this
Python package API was surprisingly not at all steep, and I am deeply indebted
to Michael Scott Cuthbert, cuthbertLab, and every additional contributor for such a
phenomenal project.

I plan to hopefully continue experiment with extending this API, and I sincerely
request any and all feedback.
