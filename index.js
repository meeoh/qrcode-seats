// Guest data
const guestData = [
  { name: "Piter Gan", table: "Table 1" },
  { name: "Lina Gan", table: "Table 1" },
  { name: "Varia Gan", table: "Table 1" },
  { name: "Suwardi Lie", table: "Table 1" },
  { name: "Sherly Worth", table: "Table 1" },
  { name: "David Worth", table: "Table 1" },
  { name: "Deborah Ho", table: "Table 1" },
  { name: "Nadine Gan", table: "Table 1" },
  { name: "Tariq Abdullah", table: "Table 4" },
  { name: "Rouf Abdullah", table: "Table 4" },
  { name: "Nomar Abdullah", table: "Table 4" },
  { name: "Aroona Aftab-Abdullah", table: "Table 4" },
  { name: "Rafael Abdullah", table: "Table 4" },
  { name: "Amare Abdullah", table: "Table 4" },
  { name: "Amad Abdullah", table: "Table 4" },
  { name: "Melissa Liew", table: "Table 4" },
  { name: "Melannie Liew", table: "Table 4" },
  { name: "David La", table: "Table 4" },
  { name: "Wadood Bhatti", table: "Table 3" },
  { name: "Hameed Bhatti", table: "Table 3" },
  { name: "Atiya Khan", table: "Table 3" },
  { name: "Adnan Khan", table: "Table 3" },
  { name: "Shakoor Ahmad", table: "Table 3" },
  { name: "Sabah Zia", table: "Table 3" },
  { name: "Daoud Yaqoob", table: "Table 3" },
  { name: "Naima Yaqoob", table: "Table 3" },
  { name: "Andrew Worth", table: "Table 2" },
  { name: "Claresta Sutanto", table: "Table 2" },
  { name: "Rickey Tieu", table: "Table 2" },
  { name: "Tiffany Sum", table: "Table 2" },
  { name: "Estelita Ligatsa", table: "Table 2" },
  { name: "Jessyca Wang", table: "Table 2" },
  { name: "Maria Santamaria", table: "Table 2" },
  { name: "Omas Abdullah", table: "Table 2" },
  { name: "Everett Ligatsa", table: "Table 2" },
  { name: "Steven Ligatsa", table: "Table 2" },
  { name: "Ashfa Chaudary", table: "Table 5" },
  { name: "Moaaz Sheikh", table: "Table 5" },
  { name: "Rehan Chaudary", table: "Table 5" },
  { name: "Wasla Mahmood", table: "Table 5" },
  { name: "Hila Mahmood", table: "Table 5" },
  { name: "Maaz Mahmood", table: "Table 5" },
  { name: "Sonilla Majeed", table: "Table 5" },
  { name: "Kashif Majeed", table: "Table 5" },
  { name: "Lisa Chaudary", table: "Table 5" },
  { name: "Imran Chaudary", table: "Table 5" },
  { name: "Anam Abdullah", table: "Table 5" },
  { name: "Mueen Abdullah", table: "Table 5" },
  { name: "Mohsan Abdullah", table: "Table 6", tags: [";)"] },
  { name: "Chris Bogdon", table: "Table 6", tags: [";)"] },
  { name: "Fraz Mahmood", table: "Table 6" },
  { name: "Shambhavi Shah", table: "Table 6" },
  { name: "Azib Chaudary", table: "Table 6" },
  { name: "Matt Jenkins", table: "Table 6" },
  { name: "Mahera Malik", table: "Table 6" },
  { name: "Vajeeha Malik", table: "Table 6" },
  { name: "Moawaz Sheikh", table: "Table 6" },
  { name: "Amna Sheikh", table: "Table 6" },
  { name: "Isra Chaudary", table: "Table 6" },
  { name: "Lauren Murray", table: "Table 6" },
  { name: "Tuan Truong", table: "Table 12" },
  { name: "Carol Pham", table: "Table 12" },
  { name: "Jarry Ahmad", table: "Table 12" },
  { name: "Leslie Orzel", table: "Table 12" },
  { name: "Athar Zia", table: "Table 12" },
  { name: "Basil Ahmad", table: "Table 12" },
  { name: "Kamal Zia", table: "Table 12" },
  { name: "Lorenzo Raymundo", table: "Table 12" },
  { name: "Shandi Raymundo", table: "Table 12" },
  { name: "Chance Nguyen", table: "Table 12" },
  { name: "Irfan Aziz", table: "Table 12" },
  { name: "Javaida Aziz", table: "Table 12" },
  { name: "Lily Liu", table: "Table 9" },
  { name: "David Liu", table: "Table 9" },
  { name: "Chesia Popovici", table: "Table 9" },
  { name: "Rosaline Tanugraha", table: "Table 9" },
  { name: "Sebastian Popovici", table: "Table 9" },
  { name: "Ali Khider", table: "Table 9" },
  { name: "Manal Abu-Shawar", table: "Table 9" },
  { name: "Rashi Atrey", table: "Table 9" },
  { name: "Alay Parikh", table: "Table 9" },
  { name: "Lavanya Kaleeswaran", table: "Table 9" },
  { name: "Harry Burke", table: "Table 9" },
  { name: "Krissatya Tulus", table: "Table 9" },
  { name: "Khristian Rampersad", table: "Table 10" },
  { name: "Beatriz Jereza", table: "Table 10" },
  { name: "Bryan Anderson", table: "Table 10", tags: [";)"] },
  { name: "Deanna Vongsaly", table: "Table 10" },
  { name: "Brian Tran", table: "Table 10" },
  { name: "Wilson Thoi", table: "Table 10" },
  { name: "Jillian Kim", table: "Table 10" },
  { name: "Julia Revell", table: "Table 10" },
  { name: "Joseph Ng Chow", table: "Table 10" },
  { name: "Bryant Muljadi", table: "Table 10", tags: [";)"] },
  { name: "Roney Dominique", table: "Table 10", tags: [";)"] },
  { name: "Charlotte Kitchener", table: "Table 10" },
  { name: "Gurmukh Lall", table: "Table 7" },
  { name: "Noah Lutz", table: "Table 7" },
  { name: "Alice Yue", table: "Table 7" },
  { name: "Nick Bastian", table: "Table 7" },
  { name: "Blake Nanakdewa", table: "Table 7" },
  { name: "Julianne Scott", table: "Table 7" },
  { name: "Jeet Lall", table: "Table 7" },
  { name: "Max Halley", table: "Table 7" },
  { name: "Matt Marini", table: "Table 7", tags: [";)"] },
  { name: "Tyler Lutz", table: "Table 7" },
  { name: "Evan Horvat", table: "Table 7" },
  { name: "Ian Nguyen", table: "Table 7" },
  { name: "Sameer Ahmad", table: "Table 11" },
  { name: "Aleeza Khan", table: "Table 11" },
  { name: "Eashal Yaqoob", table: "Table 11" },
  { name: "Moez Bhatti", table: "Table 11" },
  { name: "Amelia Khan", table: "Table 11" },
  { name: "Shanai Yaqoob", table: "Table 11" },
  { name: "Shamaiza Yaqoob", table: "Table 11" },
  { name: "Izza Yaqoob", table: "Table 11" },
  { name: "Riyad Bhatti", table: "Table 11" },
  { name: "Mehreen Chaudary", table: "Table 11" },
  { name: "Shameel Abdullah", table: "Head table" },
  { name: "Natasha Gan", table: "Head table" },
  { name: "Dee Navaratnam", table: "Table 8" },
  { name: "Sinthu Navaratnam", table: "Table 8" },
  { name: "Mayu Panchalingam", table: "Table 8" },
  { name: "Manbir Basan", table: "Table 8" },
  { name: "Harman Basan", table: "Table 8" },
  { name: "Abdullah Khan", table: "Table 8" },
  { name: "Ariba Khan", table: "Table 8" },
  { name: "Brayden Bowler", table: "Table 8" },
  { name: "Alexandra Aiello", table: "Table 8" },
  { name: "Daanish Abdullah", table: "Table 8" },
  { name: "Waqas Abdullah", table: "Table 8" },
];

let fuse = null;
let isDataLoaded = false;

// Initialize Fuse.js with options
function initializeFuse(data) {
  fuse = new Fuse(data, {
    keys: ["name", "tags"],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2
  });
  isDataLoaded = true;
  document.getElementById("loading").classList.remove("active");
  document.getElementById("searchInput").disabled = false;
}

// Initialize search
document.getElementById("loading").classList.add("active");
document.getElementById("searchInput").disabled = true;

// Initialize immediately since we have the data
initializeFuse(guestData);

// Add debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle search input
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const performSearch = debounce((query) => {
  if (!isDataLoaded) return;

  if (query.length < 2) {
    fadeOutAndClear();
    return;
  }

  const results = fuse.search(query);
  
  // First fade out existing results
  fadeOutAndClear(() => {
    displayResults(results);
  });
}, 50); // 150ms debounce delay

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  performSearch(query);
});

// Fade out existing results and then clear
function fadeOutAndClear(callback) {
  const existingResults = searchResults.children;
  if (existingResults.length === 0) {
    searchResults.innerHTML = "";
    if (callback) callback();
    return;
  }

  // Add fade out animation to existing results
  Array.from(existingResults).forEach(element => {
    element.style.animation = 'fadeOut 0.2s ease-out forwards';
  });

  // Wait for animation to complete before clearing
  setTimeout(() => {
    searchResults.innerHTML = "";
    if (callback) callback();
  }, 200);
}

// Display search results
function displayResults(results) {
  if (results.length === 0) {
    searchResults.innerHTML = `
            <div class="text-center text-gray-500 py-12 animate-fade-in">
                <svg class="w-16 h-16 mx-auto mb-4 text-[#8B9B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <p class="text-2xl font-serif mb-2">No matches found</p>
                <p class="text-gray-400 font-serif">Try a different search term</p>
            </div>
        `;
    return;
  }

  const container = document.createElement('div');
  container.className = 'grid gap-4 p-4 max-w-3xl mx-auto font-serif';

  results.forEach((result, index) => {
    const { name, table } = result.item;
    const delay = index * 50;

    const resultElement = document.createElement("div");
    resultElement.className =
      'bg-white p-6 rounded-xl shadow-sm border border-[#8B9B6B]/20 hover:shadow-lg hover:border-[#8B9B6B]/40 transition-all duration-300 ease-in-out transform hover:-translate-y-1 opacity-0';
    resultElement.style.animation = `fadeSlideIn 0.3s ease-out ${delay}ms forwards`;
    resultElement.innerHTML = `
            <div class="flex justify-between items-center">
                <div class="w-full">
                    <h3 class="text-2xl text-gray-800 mb-2">${name}</h3>
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-[#8B9B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4c-2.5 0-4.5 2-4.5 4.5S9.5 13 12 13s4.5-2 4.5-4.5S14.5 4 12 4zM3 18c0-2 4-3.1 9-3.1s9 1.1 9 3.1v1H3v-1z" />
                        </svg>
                        <p class="text-[#8B9B6B]">${table}</p>
                    </div>
                </div>
            </div>
        `;
    container.appendChild(resultElement);
  });

  searchResults.appendChild(container);
}

// Add all animation keyframes and styles
if (!document.querySelector('#search-animations')) {
  const style = document.createElement('style');
  style.id = 'search-animations';
  style.textContent = `
    @keyframes fadeSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
    #searchInput, #searchResults, h1 {
      font-family: serif;
    }
    #searchInput {
      border-color: #8B9B6B40;
      transition: all 0.3s ease;
    }
    #searchInput:focus {
      border-color: #8B9B6B;
      box-shadow: 0 0 0 2px #8B9B6B20;
    }
    #searchResults {
      min-height: 200px;
    }
  `;
  document.head.appendChild(style);
}
