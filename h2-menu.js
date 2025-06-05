      function createH2Menu(containerSelector = 'article') {

        const h2Elements = document.querySelectorAll('h2[id][data-menutitle]');
        // Create the menu container
        const menu = document.createElement('nav');
        menu.className = 'h2-menu';
        
        // Create an unordered list for the menu items
        const menuList = document.createElement('ul');
        h2Elements.forEach(h2 => {
          // Create list item
          const listItem = document.createElement('li');
          // Create the link
          const link = document.createElement('a');
          link.href = `#${h2.id}`;
          link.textContent = h2.getAttribute('data-menutitle');
          // Append link to list item, then list item to menu list
          listItem.appendChild(link);
          menuList.appendChild(listItem);
        });
        // Append the list to the menu
        menu.appendChild(menuList);
        
        // Find the container and append the menu
        const container = document.querySelector(containerSelector);
        if (container) {
          container.appendChild(menu);
        } else {
          // Fallback to body if container not found
          document.body.appendChild(menu);
        }
        return menu;
      }

      document.addEventListener('DOMContentLoaded', function() {
        createH2Menu('#sidebar');
      });