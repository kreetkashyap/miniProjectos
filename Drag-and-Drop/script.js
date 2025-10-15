
  const leftBox = document.getElementById("left");
  const rightBox = document.getElementById("right");
  const listItems = document.querySelectorAll(".list");

  let selected = null;

  // When dragging starts
  listItems.forEach(item => {
    item.addEventListener("dragstart", e => {
      selected = e.target;
    });
  });

  // Allow drop on both boxes
  [leftBox, rightBox].forEach(box => {
    box.addEventListener("dragover", e => e.preventDefault());

    box.addEventListener("drop", e => {
      if (selected) {
        box.appendChild(selected);
        selected = null;
      }
    });
  });





   /* <script>
        let leftBox = document.getElementById('left');
        let rightBox = document.getElementById('right');
        let listItems = document.querySelectorAll('.list');


        let selected = null;

      for(let list of listItems){
        list.addEventListener('dragstart', (e) => {
            let selected = e.target;

            rightBox.addEventListener('dragover' , (e) => {
                e.preventDefault();
            })
            rightBox.addEventListener('drop', (e) => {
                rightBox.appendChild(selected);
                selected = null;
            })
            leftBox.addEventListener('dragover', (e) => {
                e.preventDefault();
            })
            leftBox.addEventListener('drop', (e) => {
                leftBox.appendChild(selected);
                selected = null;
            })
           
        })
      }

---> Gave Error. Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    </script> */