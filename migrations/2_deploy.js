
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "ConsenSys Academy Mentor "," CAM", "https://my-json-server.typicode.com/robbiekruszynski/CAM_DB/tokens/");
};