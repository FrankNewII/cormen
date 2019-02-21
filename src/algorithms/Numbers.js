export default class Numbers {
    static random(from, to) {
        return (to - from) * Math.random() + from;
    }
}
