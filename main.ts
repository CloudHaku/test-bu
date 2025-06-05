let Myo: Position = null
let Mx = 0
let My = 0
player.onChat("run", function () {
    Myo = positions.add(
    player.position(),
    pos(-1, 0, -1)
    )
    builder.teleportTo(Myo)
    Mx = 7
    My = 7
    for (let index = 0; index < 4; index++) {
        builder.move(BACK, Mx - 1)
        builder.move(RIGHT, My - 1)
        builder.move(FORWARD, Mx - 1)
        builder.move(LEFT, My - 1)
        builder.tracePath(GOLD_BLOCK)
        builder.shift(0, 1, 0)
    }
})
