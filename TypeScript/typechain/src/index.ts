import crypto from "crypto";
// 해시값 도출 패키지
// tsconfig의 "esModuleInterop": true추가

interface BlockShape {
  prevHash: string; // 이전 해쉬 값
  height: number; // 블록의 위치
  data: string; // 블록으로 보호할 데이터
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string // 세 개의 값을 토대로 새로운 hash값을 생성한다. // 해쉬 값은 입력값이 같으면 항상 일정하다. // 즉 데이터가 변하지 않으면 해쉬값도 변하지 않는다. // 이를 통해 블록체인의 데이터가 보호된다. // 해쉬값이 변하지 않으면 블록체인의 블록정보도 수정되지 않은 것이다.
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
    // toHash를 새로운 해쉬 값으로 만들어 준 것을 리턴
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
    // 원본 블록들의 보호를 위해 복사본을 리턴한다.
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

blockchain.getBlocks().push(new Block("xxxx", 1111, "HACKEDDD"));
// getBlocks는 복사본을 리턴하기 때문에 블록체인에 영향이 가지 않는다.

console.log(blockchain.getBlocks());
