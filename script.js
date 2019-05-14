window.onload = function() {
    let btns = document.querySelectorAll( '.row div' );
    let results = document.querySelector( '#result' );

    btns.forEach( btn => {
        btn.onclick = calc;
    });
    
    addEventListener('keydown', (e) => {
        switch (e.keyCode){
            case 13:
                equal();
                break;
            case 67:
                clear();
                break;
            case 48:
                results.blur();
                results.value += 0;
                break;
            case 49:
                results.blur();
                results.value += 1;
                break;
            case 50:
                results.blur();
                results.value += 2;
                break;
            case 51:
                results.blur();
                results.value += 3;
                break;
            case 52:
                results.blur();
                results.value += 4;
                break;
            case 53:
                results.blur();
                results.value += 5;
                break;
            case 54:
                results.blur();
                results.value += 6;
                break;
            case 55:
                results.blur();
                results.value += 7;
                break;
            case 56:
                results.blur();
                results.value += 8;
                break;
            case 57:
                results.blur();
                results.value += 9;
                break;
            case 187:
                results.blur();
                results.value += '+'
                break;
            case 189:
                results.blur();
                results.value += '-'
                break;
            case 191:
                results.blur();
                results.value += '/'
                break;
            case 77:
                results.blur();
                results.value += '*';
                break;
            case 79:
                results.blur();
                results.value += '%';
                break;
            case 8:
                results.focus();
                if( results.value.length === 0) {
                    results.value = '';
                    results.blur();
                }
                break;
            case 190:
                results.blur();
                results.value += '.';
                break;
            case 83:
                sqrt();
                break;
            case 70:
                results.value = factorial( eval( results.value ) );
                break;
            case 80:
                pow();
                break;
                
        };
    });

    function calc(e) {
        if ( e.target.innerText === '=' ){
            equal();
        }
        else if ( e.target.innerText === 'C' ){
            results.blur();
            clear();
        }
        else if( e.target.innerText === 'x' ){
            results.value += '*';
        }
        else if ( e.target.innerText === '√'){
            sqrt();
        }
        else if ( e.target.innerText === document.querySelector('#x2').innerText) {
            pow();
        }
        else if ( e.target.innerText === 'x!' ){
            results.value = factorial( eval( results.value ) );
        }
        else {
            results.value += e.target.innerText;
        }
    };

    function equal(){
        if ( eval(results.value) == undefined ) {
            results.value = '';
        }
        else if ( isNaN( eval( results.value ) ) ){
            results.value = 'Error(click to c)';
            results.blur();
        }
        else {
            results.blur();
            results.value = eval( results.value );
        }
    };

    function clear(){
        results.value = '';
    };
    function sqrt() {
        results.value = Math.sqrt( eval( results.value ) )
    };
    function pow() {
        results.value = Math.pow( eval( results.value ), 2 );
    };
    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    };
}