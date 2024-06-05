function EveryTube(){
    return html`<iframe class="hovertext" width="640" height="360" src="https://www.youtube.com/embed/3LHoQfxffSk" title="I visited every station on the tube. (Music Sync)" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
}

window.addEventListener('load', () => {
    document.getElementById("everytube").appendChild(h(EveryTube))
})