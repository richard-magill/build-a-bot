<template>
  <div class = "content">
      <button class= "add-to-cart" @click="addToCart()"> Add to Cart </button>
        <table class= "cart">
          <thead>
          </thead>
          <tbody>
            <tr v-for="robot, index in cart" :key="index">
              <td>{{robot.head.title}}</td>
              <td class="cost">${{robot.cost}}</td>
            </tr>
          </tbody>
        </table>

        <form  v-show=showCheckout :action= nodeUrl.url method="POST">
          <div class="cost">
            <div v-for="robot, index in cart" :key="index">
              <input type="text" id="price-input" v-model= robot.price name="price" hidden/>
              <input type="number" id="quantity-input" min="1"
                value="1" name="quantity" hidden />
            </div>
          </div>

          <button class="checkout" type="submit" id="submit">
            Checkout</button>
        </form>

      <div class="top-row">
        <div class="top part">
          <div class = "robot-name">{{selectedRobot.head.title}}</div>
          <img :src="selectedRobot.head.src" title="head"/>
          <button class="prev-selector" @click="selectPreviousHead()">&#9668;</button>
          <button class="next-selector" @click="selectNextHead()">&#9658;</button>
        </div>
      </div>
      <div class="middle-row">
        <div class="left part">
          <img :src="selectedRobot.leftArm.src" title="left arm"/>
          <button class="prev-selector" @click="selectPreviousLeftArm()">&#9650;</button>
          <button class="next-selector" @click="selectNextLeftArm()">&#9660;</button>
        </div>
        <div class="center part">
          <img :src="selectedRobot.torso.src" title="torso"/>
          <button class="prev-selector" @click="selectPreviousTorso()">&#9668;</button>
          <button class="next-selector" @click="selectNextTorso()">&#9658;</button>
        </div>
        <div class="right part">
          <img :src="selectedRobot.rightArm.src" title="right arm"/>
          <button class="prev-selector" @click="selectPreviousRightArm()">&#9650;</button>
          <button class="next-selector" @click="selectNextRightArm()">&#9660;</button>
        </div>
      </div>
      <div class="bottom-row">
        <div class="bottom part">
          <img :src="selectedRobot.base.src" title="base"/>
          <button class="prev-selector" @click="selectPreviousBase()">&#9668;</button>
          <button class="next-selector" @click="selectNextBase()">&#9658;</button>
        </div>
      </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {

      availableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0,

    };
  },
  computed: {
    nodeUrl() {
      return {
        url: process.env.VUE_APP_NODE_URL,
      };
    },
    showCheckout() {
      return (this.cart.length > 0);
    },
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        base: availableParts.bases[this.selectedBaseIndex],
        price: availableParts.heads[this.selectedHeadIndex].price,
      };
    },
  },
  methods: {

    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.leftArm.cost
        + robot.rightArm.cost
        + robot.head.cost
        + robot.base.cost
        + robot.torso.cost;
      // const { price } = this.selectedRobot;
      console.log(process.env.VUE_APP_NODE_URL);
      this.cart.push({ ...robot, cost });
    },
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectPreviousHead() {
      this.selectedHeadIndex = getPreviousValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length,
      );
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = getPreviousValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length,
      );
    },
    selectNextTorso() {
      this.selectedTorsoIndex = getNextValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length,
      );
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex = getPreviousValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length,
      );
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = getNextValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length,
      );
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = getPreviousValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length,
      );
    },
    selectNextBase() {
      this.selectedBaseIndex = getNextValidIndex(
        this.selectedBaseIndex,
        availableParts.bases.length,
      );
    },
    selectPreviousBase() {
      this.selectedBaseIndex = getPreviousValidIndex(
        this.selectedBaseIndex,
        availableParts.bases.length,
      );
    },
  },
};
</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  left:30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
.cart {
  position: absolute;
  top: 50px;
  left:30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
.checkout {
  position: absolute;
  top: 450px;
  right:30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
.checkoutFormBody {
  position: absolute;
  top: 200px;
  right:30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align:right;
}
</style>
