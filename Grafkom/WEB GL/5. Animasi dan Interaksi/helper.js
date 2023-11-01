function translation(dx, dy, dz, gl, program){
    var translationMat = new Float32Array([
        1.0, 0.0, 0.0, dx,
        0.0, 1.0, 0.0, dy,
        0.0, 0.0, 1.0, dz,
        0.0, 0.0, 0.0, 1.0
    ]);
    var translation = gl.getUniformLocation(program, "uMatrix");
    gl.uniformMatrix4fv(translation, false, translationMat);
}

function scale(sx, sy, sz, gl, program){
    var scaleMat = new Float32Array([
        sx, 0.0, 0.0, 0.0,
        0.0, sy, 0.0, 0.0,
        0.0, 0.0, sz, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    var scale = gl.getUniformLocation(program, "uMatrix");
    gl.uniformMatrix4fv(scale, false, scaleMat);
}

function shear(gl, program){
    var angle = 90;
    var cota = 1/Math.tan(angle);

    var shearMat = new Float32Array([
        1.0, cota, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    var shear = gl.getUniformLocation(program, "uMatrix");
    gl.uniformMatrix4fv(shear, false, shearMat);
}

function rotateZ(gl, program, angle){
    var ca = Math.cos(angle);
    var sa = Math.sin(angle);

    var matriksRotasi = new Float32Array([
        ca, -sa, 0.0, 0.0,
        sa, ca, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
        ]);
    
    var shear = gl.getUniformLocation(program, "uMatrix");
    gl.uniformMatrix4fv(shear, false, matriksRotasi);
}

