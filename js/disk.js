console.log('Disk script loaded');

function initDisk() {
  console.log('Initializing disk...');
  
  // Add home-page class to body for styling
  document.body.classList.add('home-page');
  
  // Create disk container if it doesn't exist
  let container = document.querySelector('.disk-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'disk-container';
    document.body.insertBefore(container, document.body.firstChild);
    console.log('Disk container created and added to body');
  }
  
  return container;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  const diskContainer = initDisk();
  const techTopics = [
    // Machine Learning Algorithms
    'Neural Networks', 'Random Forest', 'SVM', 'K-Means', 'XGBoost',
    'Decision Trees', 'Linear Regression', 'Logistic Regression', 'Naive Bayes',
    'K-Nearest Neighbors', 'PCA', 'LDA', 'Gradient Boosting',
    'Deep Learning', 'Reinforcement Learning', 'Time Series Analysis',
    
    // Python Libraries
    'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch',
    'Keras', 'OpenCV', 'NLTK', 'spaCy', 'Matplotlib', 'Seaborn',
    'Plotly', 'Dask', 'FastAPI', 'Flask', 'Django',
    
    // Data Structures & Algorithms
    'Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting',
    'Searching', 'Dynamic Programming', 'Recursion', 'Hash Tables',
    'Stacks', 'Queues', 'Heaps', 'Tries', 'Graph Traversal',
    
    // Data Science
    'Data Cleaning', 'Feature Engineering', 'Model Evaluation',
    'A/B Testing', 'Statistical Analysis', 'Data Visualization',
    'Natural Language Processing', 'Computer Vision', 'Recommendation Systems',
    
    // Cloud & AWS
    'AWS S3', 'EC2', 'Lambda', 'RDS', 'DynamoDB',
    'SageMaker', 'CloudFormation', 'Elastic Beanstalk', 'ECS',
    'EKS', 'API Gateway', 'CloudFront', 'Route 53', 'IAM',
    
    // AI Models
    'GPT-4', 'Claude', 'LLaMA', 'Mistral', 'Gemini',
    'BERT', 'Stable Diffusion', 'DALL-E', 'Whisper', 'T5',
    'Deepseek', 'Anthropic Claude', 'GPT-3.5', 'Palm 2', 'Claude 2',
    
    // Programming Languages
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C++',
    'SQL', 'R', 'Go', 'Rust', 'Swift', 'Kotlin',
    
    // DevOps & Tools
    'Docker', 'Kubernetes', 'Terraform', 'Git', 'CI/CD',
    'Jenkins', 'GitHub Actions', 'Ansible', 'Prometheus', 'Grafana'
  ];

  // Shuffle array to randomize positions
  const shuffledTopics = techTopics.sort(() => Math.random() - 0.5);
  
  // Create disk container
  const diskContainer = document.createElement('div');
  diskContainer.className = 'disk-container';
  
  // Create disk element
  const disk = document.createElement('div');
  disk.className = 'disk';
  
  // Add items to disk
  shuffledTopics.forEach((topic, index) => {
    const item = document.createElement('div');
    item.className = 'disk-item';
    item.textContent = topic;
    
    // Position items in a circle
    const angle = (index / shuffledTopics.length) * 360;
    const radius = 45; // vmin units
    const x = Math.cos(angle * (Math.PI / 180)) * radius + 50;
    const y = Math.sin(angle * (Math.PI / 180)) * radius + 50;
    
    item.style.left = `${x}%`;
    item.style.top = `${y}%`;
    item.style.transform = `rotate(${angle + 90}deg)`;
    item.style.transformOrigin = '0 0';
    
    // Add hover effect
    item.addEventListener('mouseenter', () => {
      item.style.fontWeight = 'bold';
      item.style.opacity = '1';
      item.style.transform = `rotate(${angle + 90}deg) scale(1.2)`;
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.fontWeight = 'normal';
      item.style.opacity = '0.8';
      item.style.transform = `rotate(${angle + 90}deg)`;
    });
    
    disk.appendChild(item);
  });
  
  diskContainer.appendChild(disk);
  
  // Insert disk container at the beginning of the body
  if (document.body.firstChild) {
    document.body.insertBefore(diskContainer, document.body.firstChild);
  } else {
    document.body.appendChild(diskContainer);
  }
  
  // Pause animation when not in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        disk.style.animationPlayState = 'running';
      } else {
        disk.style.animationPlayState = 'paused';
      }
    });
  }, {
    threshold: 0.1
  });
  
  observer.observe(disk);
});
