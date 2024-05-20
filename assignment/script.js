document.addEventListener('DOMContentLoaded', function() {
    
    loadPage('login-page');

    
    function loadPage(pageId) {
       
        document.querySelectorAll('.page').forEach(function(page) {
            page.style.display = 'none';
        });

      
        var page = document.getElementById(pageId);
        if (page) {
            page.style.display = 'block';
        } else {
            console.error('Page not found: ' + pageId);
        }
    }

    
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            var pageId = this.dataset.pageId; 
            loadPage(pageId); 
        });
    });

   
    document.getElementById('login-button').addEventListener('click', function() {
        loadPage('login-page');
    });

    document.getElementById('about-link').addEventListener('click', function(event) {
        event.preventDefault(); 
        loadPage('about-page');
    });
});