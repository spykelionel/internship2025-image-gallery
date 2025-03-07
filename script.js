// Image gallery data
const galleryData = [
    {
      id: 1,
      src: "/placeholder.svg?height=500&width=500",
      title: "Mountain Landscape",
      description: "Beautiful mountain range at sunset",
      category: "nature",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=500&width=500",
      title: "Modern Skyscraper",
      description: "Contemporary architecture in downtown",
      category: "architecture",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=500&width=500",
      title: "Tropical Beach",
      description: "Crystal clear waters and white sand",
      category: "travel",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=500&width=500",
      title: "Gourmet Pasta",
      description: "Homemade pasta with fresh ingredients",
      category: "food",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=500&width=500",
      title: "Forest Path",
      description: "Serene walking trail through dense forest",
      category: "nature",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=500&width=500",
      title: "Historic Building",
      description: "Ancient architecture with intricate details",
      category: "architecture",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=500&width=500",
      title: "Mountain Village",
      description: "Charming village nestled in the mountains",
      category: "travel",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=500&width=500",
      title: "Fruit Dessert",
      description: "Fresh seasonal fruits with cream",
      category: "food",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=500&width=500",
      title: "Waterfall",
      description: "Powerful waterfall in a lush green setting",
      category: "nature",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=500&width=500",
      title: "City Skyline",
      description: "Panoramic view of a metropolitan area",
      category: "architecture",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=500&width=500",
      title: "Ancient Ruins",
      description: "Historical site with archaeological importance",
      category: "travel",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=500&width=500",
      title: "Artisan Coffee",
      description: "Perfectly brewed specialty coffee",
      category: "food",
    },
  ]
  
  // DOM Elements
  const gallery = document.querySelector(".gallery")
  const filterButtons = document.querySelectorAll(".filter-btn")
  
  // Initialize the gallery
  function initGallery() {
    renderGallery(galleryData)
    setupFilterListeners()
  }
  
  // Render gallery items
  function renderGallery(items) {
    gallery.innerHTML = ""
  
    items.forEach((item, index) => {
      const galleryItem = document.createElement("div")
      galleryItem.className = "gallery-item"
      galleryItem.style.animationDelay = `${index * 0.05}s`
  
      galleryItem.innerHTML = `
              <div class="category-badge">${capitalizeFirstLetter(item.category)}</div>
              <img src="${item.src}" alt="${item.title}" loading="lazy">
              <div class="item-overlay">
                  <h3 class="item-title">${item.title}</h3>
                  <p class="item-description">${item.description}</p>
              </div>
          `
  
      gallery.appendChild(galleryItem)
    })
  }
  
  // Filter gallery items
  function filterGallery(category) {
    let filteredItems
  
    if (category === "all") {
      filteredItems = galleryData
    } else {
      filteredItems = galleryData.filter((item) => item.category === category)
    }
  
    renderGallery(filteredItems)
  }
  
  // Setup filter button listeners
  function setupFilterListeners() {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
  
        // Filter gallery
        const filterValue = button.getAttribute("data-filter")
        filterGallery(filterValue)
      })
    })
  }
  
  // Helper function to capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  // Initialize when DOM is loaded
  document.addEventListener("DOMContentLoaded", initGallery)
  
  