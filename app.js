'use strict'
const game = new Phaser.Game(
    800,800,Phaser.AUTO,"",{preload,create}
)

function preload()
{
    game.load.spritesheet('pic','pic.jpg',1300/9,935/4);
}

function create()
{
    var pic = game.add.sprite(0,0,'pic');
    var walk = pic.animations.add('walk');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    pic.animations.play('walk', 30, true);
}