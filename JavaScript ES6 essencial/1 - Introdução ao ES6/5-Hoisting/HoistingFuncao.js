function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();

/* O hoisting faz com que ocorra algo como:
function fn() {
    function log(value) {
        console.log(value);
    }

    log('Hoisting de função');
}
*/