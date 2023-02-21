// priority: 3

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	//Smelting

	event.smelting('minecraft:charcoal', '#minecraft:logs').id('techopolis:charcoal').xp(0.1)  
	event.smelting('techopolis:prospectors_pickaxe', 'minecraft:stone_pickaxe').id('techopolis:prospectors_pickaxe').xp(0.1)  


	//Jumbo Furnace

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:cobblestone", count: 1}], result:{item: "minecraft:stone"},experience: 0.1}).id('minecraft:stone')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:stone", count: 1}], result:{item: "minecraft:smooth_stone"},experience: 0.1}).id('minecraft:smooth_stone')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "techopolis:grout", count: 1}], result:{item: "techopolis:grout_dust", count:2},experience: 0.1}).id('techopolis:grout_dust')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{type: "forge:nbt", item: "alltheores:tin_ingot", count: 1},{type: "forge:nbt", item: "minecraft:copper_ingot", count: 3}],result:{item: "alltheores:bronze_ingot", count:4},experience: 0.5}).id('tecbronzehopolis:_ingot')
	
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "minecraft:sand", count: 1}], result:{item: "minecraft:glass"},experience: 0.1}).id('techopolis:glass')

	//Immersive 

	event.shaped('1x immersiveengineering:hammer', [' B ',' SB','S  '], {S:stick, B: '#forge:ingots/bronze'}).id('immersiveengineering:crafting/hammer')
	event.shaped('24x immersiveengineering:conveyor_basic', ['L L','CCC','SSS'], {S:'minecraft:smooth_stone_slab', C: coal, L: lapis}).id('immersiveengineering:crafting/conveyor_basic')
	event.shaped('1x immersiveengineering:conveyor_dropper', ['C','W'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_dropper')
	event.shaped('1x immersiveengineering:sorter', ['WCW','CHC', 'WCW'], {C:conveyor, W: wooden_hopper, H:chest}).id('immersiveengineering:crafting/sorter')
	event.shaped('3x immersiveengineering:conveyor_splitter', ['C C',' C '], {C:conveyor}).id('immersiveengineering:crafting/conveyor_splitter')
	event.shaped('3x immersiveengineering:conveyor_extract', ['CW'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_extract')
	event.shaped('3x immersiveengineering:conveyor_vertical', ['C','C','C'], {C:conveyor}).id('immersiveengineering:crafting/conveyor_vertical')

	event.shaped('1x immersiveengineering:jerrycan', ['CC','CC'], {C:'ceramicbucket:ceramic_bucket'}).id('immersiveengineering:crafting/jerrycan')
	
	event.shaped('3x immersiveengineering:cokebrick', [' G ','GBG',' G '], {G:'techopolis:grout_dust', B:'minecraft:bricks'}).id('immersiveengineering:crafting/cokebrick')
	event.shaped('9x immersiveengineering:blastbrick', ['AGA','GBG','AGA'], {A:'#forge:ingots/aluminum', G:'minecraft:brick', B:'immersiveengineering:cokebrick'}).id('immersiveengineering:crafting/blastbrick')

	event.shaped('8x immersiveengineering:treated_wood_horizontal', ['PPP','PBP','PPP'], {P: planks, B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"immersiveengineering:creosote"}}').strongNBT()}).id('techopolis:crafting/treated_wood_horizontal')

	event.custom({"type":"immersiveengineering:blueprint","category":"molds","inputs":[{"base_ingredient":{"tag":"forge:ingots/steel"},"count":3},{"item":"immersiveengineering:wirecutter"}],"result":{"item":"immersiveengineering:mold_plate"}})
	event.custom({"type":"immersiveengineering:bottling_machine","fluid":{"amount":200,"tag":"minecraft:lava"},"input":{"item":"minecraft:glass_bottle"},"results":[{"item":"techopolis:lava_bottle"}]})

	event.shaped('4x immersiveengineering:wirecoil_copper', ['CCC','CTC','CCC'], {C: copper_ingot, T: stick}).id('techopolis:additional_copper_wire_recipe')



	//IE Metal Press

	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/signalum"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/signalum"}})
	event.custom({"type":"immersiveengineering:metal_press","conditions":[{"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:gears/signalum"}}],"energy":2400,"input":{"base_ingredient":{"tag":"forge:ingots/signalum"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/signalum"}})
	event.custom({"type":"immersiveengineering:metal_press","conditions":[{"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:rods/signalum"}}],"energy":2400,"input":{"tag":"forge:ingots/signalum"},"mold":"immersiveengineering:mold_rod","result":{"base_ingredient":{"tag":"forge:rods/signalum"},"count":2}})

	// Misc Crafting

	event.shaped('1x techopolis:grout', ['SGS','GCG','SGS'], {G: gravel, S: sand, C:'minecraft:clay'}).id('techopolis:grout')
	event.shaped('1x minecraft:clay', ['GG','GG'], {G:'techopolis:grout_dust'}).id('techopolis:clay_from_grout')
	event.shaped('1x minecraft:gravel', ['G G','   ','G G'], {G:'techopolis:grout_dust'}).id('techopolis:gravel_from_grout')
	event.shaped('1x minecraft:sand', [' G ','G G',' G '], {G:'techopolis:grout_dust'}).id('techopolis:sand_from_grout')
	event.shaped('1x minecraft:clay_ball', ['G'], {G:'techopolis:grout_dust'}).id('techopolis:clay_ball_from_grout')

	event.shaped('1x minecraft:netherrack', [' L ','LSL',' L '], {L:'techopolis:lava_bottle', S:'#techopolis:colored_stone'}).id('techopolis:netherrack').stage('nether')
	event.shaped('1x minecraft:soul_sand', [' L ','LSL',' L '], {L:'techopolis:lava_bottle', S:'#minecraft:sand'}).id('techopolis:sand').stage('nether')
	event.shaped('1x minecraft:basalt', [' L ','LSL',' L '], {L:'techopolis:lava_bottle', S:'minecraft:smooth_stone'}).id('techopolis:basalt').stage('nether')

	event.shaped('6x minecraft:netherite_scrap', ['BBB','SSS','BBB'], {B:'minecraft:nether_brick', S:'minecraft:soul_sand'}).id('techopolis:netherite_scrap').stage('debris')
	event.shaped('1x minecraft:ancient_debris', [' S ','SBS',' S '], {S:'minecraft:netherite_scrap', B:'minecraft:basalt'}).id('techopolis:ancient_debris').stage('debris')

	//Extended Crafting

	event.shaped('1x extendedcrafting:basic_table', ['CCC','TCT','CCC'], {C: 'immersiveengineering:coal_coke', T: 'minecraft:crafting_table'}).id('extendedcrafting:basic_table')
	event.shaped('1x extendedcrafting:basic_auto_table', [' H ','HBH',' H '], {H: wooden_hopper, B: 'extendedcrafting:basic_table'}).id('extendedcrafting:basic_auto_table')

	event.shaped('1x extendedcrafting:advanced_table', ['CCC','TCT','CCC'], {C: 'immersiveengineering:coal_coke', T: 'extendedcrafting:basic_table'}).id('extendedcrafting:advanced_table')
	event.shaped('1x extendedcrafting:advanced_auto_table', [' H ','HBH',' H '], {H: wooden_hopper, B: 'extendedcrafting:advanced_table'}).id('extendedcrafting:advanced_auto_table')

	event.shaped('1x extendedcrafting:elite_table', ['CCC','TCT','CCC'], {C: 'techopolis:ultimate_technium_ingot', T: 'extendedcrafting:advanced_table'}).id('extendedcrafting:elite_table')
	event.shaped('1x extendedcrafting:elite_auto_table', [' H ','HBH',' H '], {H: hopper, B: 'extendedcrafting:elite_table'}).id('extendedcrafting:elite_auto_table')
	event.shaped('1x extendedcrafting:advanced_auto_table', [' H ','HBH',' H '], {H: wooden_hopper, B: 'extendedcrafting:advanced_table'}).id('extendedcrafting:advanced_auto_table')

	event.shaped('1x extendedcrafting:ultimate_table', ['CCC','TCT','CCC'], {C: 'techopolis:ultimate_technium_ingot', T: 'extendedcrafting:elite_table'}).id('extendedcrafting:ultimate_table')
	event.shaped('1x extendedcrafting:ultimate_auto_table', [' H ','HBH',' H '], {H: hopper, B: 'extendedcrafting:ultimate_table'}).id('extendedcrafting:ultimate_auto_table')
	
	

	
	//Replace 

	event.replaceInput({id: 'craftingautomat:autocrafter'}, 'minecraft:dropper', 'minecraft:crafting_table')
	event.replaceInput({id: 'littlelogistics:transmitter_component'}, 'minecraft:ender_pearl', 'minecraft:redstone')
	event.replaceInput({id: 'littlelogistics:rapid_hopper'}, 'minecraft:gold_ingot', basic_technium)
	event.replaceInput({id: 'extendedcrafting:black_iron_ingot'}, 'minecraft:black_dye', 'minecraft:netherite_ingot')
	
	//Thermal

	event.replaceInput({id: 'thermal:machine_frame'}, 'minecraft:iron_ingot', 'alltheores:silver_ingot')
	event.replaceInput({id: 'thermal:machine_frame'}, '#forge:gears/tin', '#forge:gears/electrum')
	event.replaceInput({id: 'thermal:machine_crucible'}, 'minecraft:nether_bricks', 'thermal:obsidian_glass')

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "forge:obsidian","count": 1},{"value": [{"tag": "forge:dusts/steel"}],"count": 1},{"tag": "forge:sand",
			"count": 1}],"result": [{"item": "thermal:obsidian_glass","count": 2}],"energy": 4800}).id('thermal:machines/smelter/smelter_glass_obsidian')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "minecraft:redstone",
			"count": 1}],"result": [{"item": "alltheores:ruby_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_ruby_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "thermal:lapis_dust",
			"count": 1}],"result": [{"item": "alltheores:ruby_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_sapphire_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "techopolis:prismarine_dust",
			"count": 1}],"result": [{"item": "alltheores:sapphire_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_peridot_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "minecraft:diamond"}],"count": 1},{"item": "minecraft:emerald",
			"count": 1}],"result": [{"item": "techopolis:infused_crystalline","count": 1}],"energy": 5000}).id('techopolis:infused_crystalline')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "alltheores:ruby","count": 1},{"value": [{"item": "alltheores:sapphire"}],"count": 1},{"item": "alltheores:peridot",
			"count": 1}],"result": [{"item": "minecraft:amethyst_shard","count": 1}],"energy": 5000}).id('techopolis:amethyst')

	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "thermal:niter"}],"result": [{"item": "techopolis:crystal_base"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:ruby_dust"}],"result": [{"item": "alltheores:ruby"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:sapphire_dust"}],"result": [{"item": "alltheores:sapphire"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:peridot_dust"}],"result": [{"item": "alltheores:peridot"}],"energy": 2500})

	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "minecraft:water","amount": 250},{"item": "techopolis:crystal_base"}],"result": [{"item": "minecraft:prismarine_shard"}],"energy": 2500})

	event.custom({"type": "thermal:crucible","ingredient": {"tag": "forge:sand"},"result": [{"fluid": "techopolis:liquid_glass","amount": 500}],"energy": 2000})
	event.custom({"type": "thermal:crucible","ingredient": {"tag": "forge:glass"},"result": [{"fluid": "techopolis:liquid_glass","amount": 1000}],"energy": 2000})

	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "techopolis:crystalline"},"result": [{"item": "techopolis:crystalline_dust","count": 1}],"energy_mod": 0.5})
	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "minecraft:prismarine_shard"},"result": [{"item": "techopolis:prismarine_dust","count": 1}],"energy_mod": 0.5})

	//Mekanism

	event.replaceInput({id: 'mekanism:steel_casing'}, '#forge:ingots/osmium', elite_technium)
	event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"item":"techopolis:infused_crystalline"}},"output":{"item":"mekanism:alloy_infused"}}).id('mekanism:metallurgic_infusing/alloy/infused')

	//Powah

	event.custom({"type": "powah:energizing","ingredients": [{"item": "alltheores:steel_ingot"},{"item": "minecraft:gold_ingot"}],"energy": 10000,"result": {"item": "powah:steel_energized","count": 2}}).id('powah:energizing/energized_steel')
	event.replaceInput({id: 'powah:crafting/energizing_rod_starter'}, 'minecraft:quartz', '#forge:ingots/steel')
	

	//Reseach Papers (ores + quest progression)

	event.shaped('techopolis:blank_research_papers', ['PPP','P P','PPP'], {P:'minecraft:paper'}).id('techopolis:research_papers')


	event.shaped('techopolis:research_papers_copper_and_tin', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/coal', L:'#forge:storage_blocks/lapis'}).id('techopolis:rp_copper_and_tin')
	event.shaped('techopolis:research_papers_iron_and_aluminum', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/bronze', L:basic_technium}).id('techopolis:rp_iron_and_alumium')	
	event.shaped('techopolis:research_papers_redstone', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/steel', L:basic_technium}).id('techopolis:rp_redstone')
	event.shaped('techopolis:research_papers_nickel', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/aluminum', L:basic_technium}).id('techopolis:rp_nickel')
	event.shaped('techopolis:research_papers_metal_press', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L:basic_technium}).id('techopolis:rp_metal_press')
	event.shaped('techopolis:research_papers_silver_and_gold', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/constantan', L:advanced_technium}).id('techopolis:rp_silver_and_gold')
	event.shaped('techopolis:research_papers_lead', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:dusts/lead', L:advanced_technium}).id('techopolis:rp_lead')
	event.shaped('techopolis:research_papers_niter', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:gems/niter', L:advanced_technium}).id('techopolis:rp_niter')
	event.shaped('techopolis:research_papers_crystal', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'techopolis:crystal_base', L:advanced_technium}).id('techopolis:rp_crystal')
	event.shaped('techopolis:research_papers_diamond_and_emerald', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/ruby', L:advanced_technium}).id('techopolis:rp_diamond_and_emerald')
	event.shaped('techopolis:research_papers_osmium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/emerald', L:elite_technium}).id('techopolis:rp_osmium')
	event.shaped('techopolis:research_papers_mekanism', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/osmium', L:elite_technium}).id('techopolis:rp_mekanism')
	event.shaped('techopolis:research_papers_powah', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/uranium', L:elite_technium}).id('techopolis:rp_powah')
	event.shaped('techopolis:research_papers_uranium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'mekanism:alloy_atomic', L:elite_technium}).id('techopolis:rp_uranium')
	event.shaped('techopolis:research_papers_debris', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:netherrack', L:ultimate_technium}).id('techopolis:rp_debris')
	event.shaped('techopolis:research_papers_nether', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'techopolis:lava_bottle', L:ultimate_technium}).id('techopolis:rp_debris')
	
	//Reseach Papers (mods)

	event.shaped('techopolis:research_papers_thermal', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/electrum', L:advanced_technium}).id('techopolis:rp_thermal')
	event.shaped('techopolis:research_papers_little_logistic', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L:'minecraft:rail'}).id('techopolis:rp_little_logistics')
	event.shaped('techopolis:research_papers_storage_drawers', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:chest', L:'compressium:cobblestone_2'}).id('techopolis:rp_storage_drawers')
	event.shaped('techopolis:research_papers_compressium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#minecraft:logs', L:'minecraft:smooth_stone'}).id('techopolis:rp_compressium')
	event.shaped('techopolis:research_papers_immersive_aircraft', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'immersiveengineering:coal_coke', L:'immersiveengineering:treated_wood_horizontal'}).id('techopolis:rp_immersive_aircraft')
	event.shaped('techopolis:research_papers_extended_crafting', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:netherite_ingot', L:ultimate_technium}).id('techopolis:rp_extended_crafting')

	
	//Research Papers (misc)
	
	event.shaped('techopolis:research_papers_b_bucks_1', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'opolisutilities:b_bucks', L:basic_technium}).id('techopolis:rp_b_bucks_1')

	//Miners

	event.shaped('1x miners:miner_tier_2', ['SCS','LPL','SCS'], {S:'minecraft:smooth_stone', L:'#forge:ores/lapis', C:'#forge:ores/coal', P:'minecraft:stone_pickaxe'}).id('miners:miners/miner_tier_2')
	event.shaped('1x miners:miner_tier_4', ['SCS','LPL','SCS'], {S:'minecraft:smooth_stone', L:'#forge:storage_blocks/tin', C:'#forge:ingots/copper', P:basic_technium}).id('miners:miners/miner_tier_4')
	event.shaped('1x miners:tree_absorber', ['SCS','LPL','SCS'], {S:'minecraft:smooth_stone', L:'#minecraft:planks', C:'#minecraft:planks', P:'minecraft:stone_axe'}).id('miners:miners/tree_absorber')


	//Recipe Remove

	event.remove({id:'opolisutilities:resource_generator/resource_generator'})
	event.remove({id:'opolisutilities:resource_generator_2'})
	event.remove({id:'alltheores:steel_dust_from_alloy_blending'})
	event.remove({id:'beyond_earth:iron_plate'})
	event.remove({id:'minecraft:netherite_ingot'})
	event.remove({id:'beyond_earth:desh_plate'})
	event.remove({input:'alltheores:iron_ore_hammer'})
	event.remove({input:'alltheores:copper_ore_hammer'})
	event.remove({input:'alltheores:bronze_ore_hammer'})
	event.remove({input:'alltheores:invar_ore_hammer'})
	event.remove({input:'alltheores:platinum_ore_hammer'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:ingots'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:gems'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:dusts'})
	event.remove({input:'minecraft:fire_charge', output: '#thermal:glass/hardened'})
	event.remove({input:'#forge:nuggets/iron', output: '#forge:gears'})
	event.remove({id:'/thermal:machines/press//'})
	event.remove({type:'opolisutilities:resource_generator'})
	event.remove({type:'opolisutilities:resource_generator_2'})
	event.remove({type:'thermal:rock_gen'})


})
