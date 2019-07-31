
const add_position = document.getElementById('add_position');
let section_nr = 1;

add_position.addEventListener('click', function(e){
    e.preventDefault;

    const form_section = document.getElementById('section_' + section_nr);
    const copy = form_section.cloneNode(true);
    section_nr++;
    copy.id = 'section_' + section_nr;

    const inputs = copy.querySelectorAll("input");
    inputs.forEach(function(element){
        incrementID(element, section_nr);
        element.value = '';
    });
    form_section.parentNode.insertBefore(copy, form_section.nextSibling);
});


function incrementID(element, id){
    if(element !== undefined && element.name.trim().length > 0){
        element.id= element.name+'_'+id;
    }
    else{
        console.log('increment_id : error');
    }
}
