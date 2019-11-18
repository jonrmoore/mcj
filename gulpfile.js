const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProj = ts.createProject("tsconfig.json");

gulp.task("default", function() {
    return tsProj.src()
        .pipe(tsProj())
        .js.pipe(gulp.dest("dist"));
});