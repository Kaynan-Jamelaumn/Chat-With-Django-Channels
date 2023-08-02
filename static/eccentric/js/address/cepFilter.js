//front-end
  import { states } from './stateCityVariable.js';  
function stateCityValidator(stateSelected) {
  const cities = [];
  for (let state of states) {
    if (state[0] == stateSelected) {
      for (let city of state[1]) {
        cities.push(city);
      }
    }
  }
  return cities;
}

$('#select-state').on('change', (e) => {
  e.preventDefault();
  let state_selected = document.getElementById("select-state").value; //Take the current option selected

  let cities = stateCityValidator(state_selected); //get the array of cities from the current selected state
  $('#city').empty(); //delete all the cities
  $.each(cities, function (i, city) {//pass the new cities to be loaded
    $('#city').append($('<option>', {
      value: city,
      text: city
    }));
  });
});

// back end- select
/*
   $('#select-state').on('change', (e) => {
          console.log('aaaaaa')
          e.preventDefault();
          let state_selected = document.getElementById("select-state").value
  
          $.ajax({
              type: 'POST',
              url: "{% url 'account:state_on_change' %}",
              data: {
                  state_selected: state_selected,
                  csrfmiddlewaretoken: "{{csrf_token}}",
                  action: 'state_on_change'
              },
              success: function (json) {
                  console.log(json.cities_in_state);
                  let cidade = json.cities_in_state;
                  $('#city').empty()
                  $.each(cidade, function (i, cidade) {
  
                      $('#city').append($('<option>', {
                          value: cidade,
                          text: cidade
                      }));
  
                  });
              },
              error: function (xhr, errmsg, err) { }
          });
      });
  
  */