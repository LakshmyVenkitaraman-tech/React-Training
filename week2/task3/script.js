const fileStructure = {
  name: 'root',
  children: [
    {
      name: 'src',
      children: [
        { name: 'index.js' },
        { name: 'App.js' },
        {
          name: 'components',
          children: [
            { name: 'Header.js' },
            { name: 'Footer.js' }
          ]
        }
      ]
    },
    {
      name: 'public',
      children: [
        { name: 'index.html' }
      ]
    },
    { name: 'package.json' }
  ]
};

function renderTree(node, container) {
  const item = document.createElement('div');
  item.textContent = node.name;
  item.className = "ml-4 border-l-2 border-gray-300 pl-2 py-1 text-sm";

  container.appendChild(item);

  if (node.children) {
    node.children.forEach(child => renderTree(child, container));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tree-container");
  renderTree(fileStructure, container);
});
