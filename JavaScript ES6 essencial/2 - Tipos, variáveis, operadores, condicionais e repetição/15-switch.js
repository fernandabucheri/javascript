const fruit = 'banana';

switch (fruit) {
    case 'banana':
        console.log('banana');
    case 'melancia':
        console.log('melancia');
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
        console.log('mamão')
    case 'pera':
        console.log('pera')
        console.log('R$ 4,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque.');
        break;
};