const Simple3 = artifacts.require("Simple3");

module.exports = function (deployer) {
    deployer.deploy(Simple3, 3);
    // 매게변수가 있는 경우
    // deployer.deploy(Simple3, ?, ?);
};

// openzeppelin/test-helpers