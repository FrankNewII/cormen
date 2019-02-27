export default class HashFunctions {
    static division (size, v) {
        return HashFunctions._charsSum(v) % size;
    }

    static multiplication(size, v) {

        return Math.floor(size * (HashFunctions._charsSum(v) * .618 % 1 ) );
    }

    static universalHashing (size) {
        let max = Math.floor(size * 2 * Math.random() );

        let a = Math.floor(Math.random() * ( max ));
        let b = Math.floor(Math.random() * ( max - 1 ) + 1);

        return function (v) {
            return ((a * HashFunctions._charsSum(v) + b) % max) % size;
        };
    }

    static _charsSum(v) {
        let sum = 0;
        let len = (""+ v).length;

        while(--len) {
            sum += v.charCodeAt(len);
        }

        return sum;
    }
}
