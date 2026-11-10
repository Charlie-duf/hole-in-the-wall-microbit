function Round4 () {
    Obstacle1 = game.createSprite(0, 0)
    Obstacle2 = game.createSprite(1, 0)
    Obstacle3 = game.createSprite(2, 0)
    Obstacle4 = game.createSprite(3, 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        Obstacle1.change(LedSpriteProperty.Y, 1)
        Obstacle2.change(LedSpriteProperty.Y, 1)
        Obstacle3.change(LedSpriteProperty.Y, 1)
        Obstacle4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(200)
    if (Obstacle1.isTouchingEdge()) {
        Obstacle1.delete()
        Obstacle2.delete()
        Obstacle3.delete()
        Obstacle4.delete()
    }
    Score += 1
}
function Round1 () {
    Obstacle1 = game.createSprite(1, 0)
    Obstacle4 = game.createSprite(4, 0)
    Obstacle2 = game.createSprite(2, 0)
    Obstacle3 = game.createSprite(3, 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        Obstacle1.change(LedSpriteProperty.Y, 1)
        Obstacle2.change(LedSpriteProperty.Y, 1)
        Obstacle3.change(LedSpriteProperty.Y, 1)
        Obstacle4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(200)
    if (Obstacle1.isTouchingEdge()) {
        Obstacle1.delete()
        Obstacle2.delete()
        Obstacle3.delete()
        Obstacle4.delete()
    }
    Score += 1
}
function Round5 () {
    Obstacle1 = game.createSprite(0, 0)
    Obstacle2 = game.createSprite(2, 0)
    Obstacle3 = game.createSprite(3, 0)
    Obstacle4 = game.createSprite(4, 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        Obstacle1.change(LedSpriteProperty.Y, 1)
        Obstacle2.change(LedSpriteProperty.Y, 1)
        Obstacle3.change(LedSpriteProperty.Y, 1)
        Obstacle4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(200)
    if (Obstacle1.isTouchingEdge()) {
        Obstacle1.delete()
        Obstacle2.delete()
        Obstacle3.delete()
        Obstacle4.delete()
    }
    Score += 1
}
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
function Round3 () {
    Obstacle1 = game.createSprite(0, 0)
    Obstacle2 = game.createSprite(1, 0)
    Obstacle3 = game.createSprite(3, 0)
    Obstacle4 = game.createSprite(4, 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        Obstacle1.change(LedSpriteProperty.Y, 1)
        Obstacle2.change(LedSpriteProperty.Y, 1)
        Obstacle3.change(LedSpriteProperty.Y, 1)
        Obstacle4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(200)
    if (Obstacle1.isTouchingEdge()) {
        Obstacle1.delete()
        Obstacle2.delete()
        Obstacle3.delete()
        Obstacle4.delete()
    }
    Score += 1
}
function Round2 () {
    Obstacle1 = game.createSprite(0, 0)
    Obstacle2 = game.createSprite(1, 0)
    Obstacle3 = game.createSprite(2, 0)
    Obstacle4 = game.createSprite(4, 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        Obstacle1.change(LedSpriteProperty.Y, 1)
        Obstacle2.change(LedSpriteProperty.Y, 1)
        Obstacle3.change(LedSpriteProperty.Y, 1)
        Obstacle4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(200)
    if (Obstacle1.isTouchingEdge()) {
        Obstacle1.delete()
        Obstacle2.delete()
        Obstacle3.delete()
        Obstacle4.delete()
    }
    Score += 1
}
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let Obstacle4: game.LedSprite = null
let Obstacle3: game.LedSprite = null
let Obstacle2: game.LedSprite = null
let Obstacle1: game.LedSprite = null
let sprite: game.LedSprite = null
basic.showString("Good Luck")
sprite = game.createSprite(2, 4)
let Score = 0
let Lives = 3
game.setScore(Score)
for (let index = 0; index < 1; index++) {
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round2()
    if (Lives == 0) {
        game.gameOver()
    }
    Round3()
    if (Lives == 0) {
        game.gameOver()
    }
    Round4()
    if (Lives == 0) {
        game.gameOver()
    }
    Round5()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round5()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round4()
    if (Lives == 0) {
        game.gameOver()
    }
    Round2()
    if (Lives == 0) {
        game.gameOver()
    }
    Round3()
    if (Lives == 0) {
        game.gameOver()
    }
}
basic.showString("Well done!")
sprite.delete()
sprite = game.createSprite(2, 3)
for (let index = 0; index < 1; index++) {
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round2()
    if (Lives == 0) {
        game.gameOver()
    }
    Round3()
    if (Lives == 0) {
        game.gameOver()
    }
    Round4()
    if (Lives == 0) {
        game.gameOver()
    }
    Round5()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round5()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round4()
    if (Lives == 0) {
        game.gameOver()
    }
    Round2()
    if (Lives == 0) {
        game.gameOver()
    }
    Round3()
    if (Lives == 0) {
        game.gameOver()
    }
}
basic.showString("Amazing")
sprite.delete()
sprite = game.createSprite(2, 2)
for (let index = 0; index < 1; index++) {
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round2()
    if (Lives == 0) {
        game.gameOver()
    }
    Round3()
    if (Lives == 0) {
        game.gameOver()
    }
    Round4()
    if (Lives == 0) {
        game.gameOver()
    }
    Round5()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round5()
    if (Lives == 0) {
        game.gameOver()
    }
    Round1()
    if (Lives == 0) {
        game.gameOver()
    }
    Round4()
    if (Lives == 0) {
        game.gameOver()
    }
    Round2()
    if (Lives == 0) {
        game.gameOver()
    }
    Round3()
    if (Lives == 0) {
        game.gameOver()
    }
}
basic.showString("Good game")
game.gameOver()
basic.showNumber(Score)
basic.forever(function () {
    if (sprite.isTouching(Obstacle1) == true) {
        Lives += -1
    }
    if (sprite.isTouching(Obstacle2)) {
        Lives += -1
    }
    if (sprite.isTouching(Obstacle3)) {
        Lives += -1
    }
    if (sprite.isTouching(Obstacle4)) {
        Lives += -1
    }
})
