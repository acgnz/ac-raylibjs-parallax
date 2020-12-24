const r = require('raylib');
 
const screenWidth = 800;
const screenHeight = 450;
const delta = 1 / 60;
let timer = 0;
let reverse = false;
r.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window");
r.SetTargetFPS(60);

const textures = [
    r.LoadTexture("resources/bg/layer_01.png"),
    r.LoadTexture("resources/bg/layer_02.png"),
    r.LoadTexture("resources/bg/layer_03.png"),
    r.LoadTexture("resources/bg/layer_04.png"),
    r.LoadTexture("resources/bg/layer_05.png"),
    r.LoadTexture("resources/bg/layer_06.png"),
    r.LoadTexture("resources/bg/layer_07.png"),
    r.LoadTexture("resources/bg/layer_08.png")
].reverse();

 
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    let offset = timer * 4;

    for(let i = 0; i < textures.length; i++) {
        r.DrawTextureEx(
            textures[i], 
            { 
                x: (screenWidth / 2 - (textures[i].width / 2) * 0.5) + offset * i, 
                y: screenHeight / 2 -(textures[i].height / 2) * 0.5
            }, 
            0, 
            0.5, 
            r.WHITE)
    }
    r.EndDrawing();
    if(timer >= 4) reverse = true;
    if(timer <= -4) reverse = false;
    if(reverse)
        timer -= delta;
    else
        timer += delta;
}
r.CloseWindow();