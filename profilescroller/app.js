const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Houston TX',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Austin TX',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Will Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Dallas TX',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

//call 1st profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  
  if(currentProfile !== undefined){
  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
  </ul>
  <ul class="list-group">
    <li class="list-group-item">Age: ${currentProfile.age}</li>
  </ul>
  <ul class="list-group">
    <li class="list-group-item">Location: ${currentProfile.location}</li>
  </ul>
  <ul class="list-group">
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  }
  else {
    window.location.reload();
  }
}

// Profile iter
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
}



