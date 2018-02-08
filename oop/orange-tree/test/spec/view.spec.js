describe ("View", function() {

    // we create a variable to store our fake 'grove' in the outer scope so that our test
    //  specs can access it
    var mockGrove;

    // we abstract out our 'grove' creation into its own function for readability purposes
    var createGrove = function() {
        mockGrove = document.createElement('div');

        mockGrove.className = "grove";

        document.body.appendChild(mockGrove);
    };

    beforeEach(function() {
        // before each test spec run, we run createGrove to generate the 'grove' DOM element
        createGrove();
    });

    afterEach(function() {
        // after each test spec run, we remove the 'grove' DOM element to create a clean slate
        //  for the next test
        document.body.removeChild(mockGrove);
    });

    describe(".renderTree()", function() {

        // we create a variable to store our fake 'template' in the outer scope so that our test
        //  specs can access it
        var mockTreeTemplate;

        // we abstract out our 'template' creation into its own function for readability purposes
        var createMockTreeTemplate = function() {
            mockTreeTemplate = document.createElement('div');

            mockTreeTemplate.id = "orange-tree-template";

            // we create a fake orange tree div; it's a barebones version of the tree, with
            //  no p tags or buttons
            // you may need to add more complexity to it for future tests!
            var orangeTree = document.createElement('div');

            orangeTree.className = "orange-tree";

            mockTreeTemplate.appendChild(orangeTree);

            document.body.appendChild(mockTreeTemplate);
        };

        beforeEach(function() {
            createMockTreeTemplate();
        });

        afterEach(function() {
            // after each test spec run, we remove the 'mockTreeTemplate' DOM elements to create a clean slate
            //  for the next test
            document.body.removeChild(mockTreeTemplate)
        });

        it("should render a tree in the grove", function(){
            var tree = new Tree();

            // pass the model (our tree) into the view so the view can render the tree in the UI using
            //  the tree's properties (height, number of oranges, etc.)
            var view = new View({
                model: tree
            });

            view.renderTree();

            expect(mockGrove.childElementCount).toEqual(1);
        });

        // TODO: write more tests here! consider writing tests and functionality for:
        //  - rendering images (<img> tags) for all the tree's current oranges
        //  - rendering the tree at a specific height (using CSS) using the tree's height property
        //  - rendering the tree using different images (using HTML/CSS) for an alive/dead tree

    });

});
