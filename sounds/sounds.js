function getSound(key) {
    // ls *.mp3 | sed 's/^/new Howl({\n    src: ["sounds\//; s/$/"]\n}),/' > sounds.js
    const sounds = [
        new Howl({
            src: ["sounds/39148__jobro__piano-ff-001.mp3"]
        }),
        new Howl({
            src: ["sounds/39149__jobro__piano-ff-002.mp3"]
        }),
        new Howl({
            src: ["sounds/39150__jobro__piano-ff-003.mp3"]
        }),
        new Howl({
            src: ["sounds/39151__jobro__piano-ff-004.mp3"]
        }),
        new Howl({
            src: ["sounds/39152__jobro__piano-ff-005.mp3"]
        }),
        new Howl({
            src: ["sounds/39153__jobro__piano-ff-006.mp3"]
        }),
        new Howl({
            src: ["sounds/39154__jobro__piano-ff-007.mp3"]
        }),
        new Howl({
            src: ["sounds/39155__jobro__piano-ff-008.mp3"]
        }),
        new Howl({
            src: ["sounds/39156__jobro__piano-ff-009.mp3"]
        }),
        new Howl({
            src: ["sounds/39157__jobro__piano-ff-010.mp3"]
        }),
        new Howl({
            src: ["sounds/39158__jobro__piano-ff-011.mp3"]
        }),
        new Howl({
            src: ["sounds/39159__jobro__piano-ff-012.mp3"]
        }),
        new Howl({
            src: ["sounds/39160__jobro__piano-ff-013.mp3"]
        }),
        new Howl({
            src: ["sounds/39161__jobro__piano-ff-014.mp3"]
        }),
        new Howl({
            src: ["sounds/39162__jobro__piano-ff-015.mp3"]
        }),
        new Howl({
            src: ["sounds/39163__jobro__piano-ff-016.mp3"]
        }),
        new Howl({
            src: ["sounds/39164__jobro__piano-ff-017.mp3"]
        }),
        new Howl({
            src: ["sounds/39165__jobro__piano-ff-018.mp3"]
        }),
        new Howl({
            src: ["sounds/39166__jobro__piano-ff-019.mp3"]
        }),
        new Howl({
            src: ["sounds/39167__jobro__piano-ff-020.mp3"]
        }),
        new Howl({
            src: ["sounds/39168__jobro__piano-ff-021.mp3"]
        }),
        new Howl({
            src: ["sounds/39169__jobro__piano-ff-022.mp3"]
        }),
        new Howl({
            src: ["sounds/39170__jobro__piano-ff-023.mp3"]
        }),
        new Howl({
            src: ["sounds/39171__jobro__piano-ff-024.mp3"]
        }),
        new Howl({
            src: ["sounds/39172__jobro__piano-ff-025.mp3"]
        }),
        new Howl({
            src: ["sounds/39173__jobro__piano-ff-026.mp3"]
        }),
        new Howl({
            src: ["sounds/39174__jobro__piano-ff-027.mp3"]
        }),
        new Howl({
            src: ["sounds/39175__jobro__piano-ff-028.mp3"]
        }),
        new Howl({
            src: ["sounds/39176__jobro__piano-ff-029.mp3"]
        }),
        new Howl({
            src: ["sounds/39177__jobro__piano-ff-030.mp3"]
        }),
        new Howl({
            src: ["sounds/39178__jobro__piano-ff-031.mp3"]
        }),
        new Howl({
            src: ["sounds/39179__jobro__piano-ff-032.mp3"]
        }),
        new Howl({
            src: ["sounds/39180__jobro__piano-ff-033.mp3"]
        }),
        new Howl({
            src: ["sounds/39181__jobro__piano-ff-034.mp3"]
        }),
        new Howl({
            src: ["sounds/39182__jobro__piano-ff-035.mp3"]
        }),
        new Howl({
            src: ["sounds/39183__jobro__piano-ff-036.mp3"]
        }),
        new Howl({
            src: ["sounds/39184__jobro__piano-ff-037.mp3"]
        }),
        new Howl({
            src: ["sounds/39185__jobro__piano-ff-038.mp3"]
        }),
        new Howl({
            src: ["sounds/39186__jobro__piano-ff-039.mp3"]
        }),
        new Howl({
            src: ["sounds/39187__jobro__piano-ff-040.mp3"]
        }),
        new Howl({
            src: ["sounds/39188__jobro__piano-ff-041.mp3"]
        }),
        new Howl({
            src: ["sounds/39189__jobro__piano-ff-042.mp3"]
        }),
        new Howl({
            src: ["sounds/39190__jobro__piano-ff-043.mp3"]
        }),
        new Howl({
            src: ["sounds/39191__jobro__piano-ff-044.mp3"]
        }),
        new Howl({
            src: ["sounds/39193__jobro__piano-ff-045.mp3"]
        }),
        new Howl({
            src: ["sounds/39194__jobro__piano-ff-046.mp3"]
        }),
        new Howl({
            src: ["sounds/39195__jobro__piano-ff-047.mp3"]
        }),
        new Howl({
            src: ["sounds/39196__jobro__piano-ff-048.mp3"]
        }),
        new Howl({
            src: ["sounds/39197__jobro__piano-ff-049.mp3"]
        }),
        new Howl({
            src: ["sounds/39198__jobro__piano-ff-050.mp3"]
        }),
        new Howl({
            src: ["sounds/39199__jobro__piano-ff-051.mp3"]
        }),
        new Howl({
            src: ["sounds/39200__jobro__piano-ff-052.mp3"]
        }),
        new Howl({
            src: ["sounds/39201__jobro__piano-ff-053.mp3"]
        }),
        new Howl({
            src: ["sounds/39202__jobro__piano-ff-054.mp3"]
        }),
        new Howl({
            src: ["sounds/39203__jobro__piano-ff-055.mp3"]
        }),
        new Howl({
            src: ["sounds/39204__jobro__piano-ff-056.mp3"]
        }),
        new Howl({
            src: ["sounds/39205__jobro__piano-ff-057.mp3"]
        }),
        new Howl({
            src: ["sounds/39206__jobro__piano-ff-058.mp3"]
        }),
        new Howl({
            src: ["sounds/39207__jobro__piano-ff-059.mp3"]
        }),
        new Howl({
            src: ["sounds/39208__jobro__piano-ff-060.mp3"]
        }),
        new Howl({
            src: ["sounds/39209__jobro__piano-ff-061.mp3"]
        }),
        new Howl({
            src: ["sounds/39210__jobro__piano-ff-062.mp3"]
        }),
        new Howl({
            src: ["sounds/39211__jobro__piano-ff-063.mp3"]
        }),
        new Howl({
            src: ["sounds/39212__jobro__piano-ff-064.mp3"]
        })
    ];
    var octave = 0;
    return sounds[keys[key] + 12*octave]
}

// new Howl({
//     src: ["sounds/39213__jobro__piano-ff-085.mp3"]
// }),
// new Howl({
//     src: ["sounds/39214__jobro__piano-ff-086.mp3"]
// }),
// new Howl({
//     src: ["sounds/39215__jobro__piano-ff-087.mp3"]
// }),
// new Howl({
//     src: ["sounds/39216__jobro__piano-ff-088.mp3"]
// }),
