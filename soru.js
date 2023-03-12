function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Who is the creator of bitcoin ?", { a: "Vitalik Buterin", b: "Satoshi Nakamoto", c: "Elon Musk" , d: "Bill Gates" }, "b"),
    new Soru("2-What year was JavaScript developed ?", { a: "1995", b: "1996", c: "1997", d: "1998" }, "a"),
    new Soru("3-Who is Apple CEO ?", { a: "Tim Cook", b: "Steve Jobs", c: "Jeff Bezos", d: "Mark Zuckerberg" }, "a"),
    new Soru("4-Where is silicon valley?", { a: "Los Angeles", b: "New York", c: "ABQ", d: "California" }, "d")
];