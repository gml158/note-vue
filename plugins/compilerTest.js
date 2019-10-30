class CompilerTest{
    apply(compiler) {
        compiler.plugin('compilation', function( compilation) {
            compilation.plugin("optimize", function() {
                console.log('这里被触发了');
            })
        })
    }
}

module.exports = CompilerTest