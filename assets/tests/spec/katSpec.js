// Test Kat Game
describe("Kat Game", function() {
    
    // Check startGame function
    describe("functions are defined", function() {
        //Check it exists
        it("start game should exist", function() {
            expect(startGame).toBeDefined();
        });    
        it("show text block should exist", function() {
            expect(showTextBlock).toBeDefined();
        });
    });
});

