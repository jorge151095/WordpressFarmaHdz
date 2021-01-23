/****************************/		
//Above header layout
/****************************/	
( function( $ ) {
//**********************************/
// container hide and show settings
//**********************************/
OPNControlTrigger.addHook( 'open-mart-toggle-control', function( argument, api ) {
		OPNCustomizerToggles ['open_mart_above_header_layout'] = [
		    {
				controls: [
					'open_mart_above_header_col1_set',
					'open_mart_above_header_col2_set',
				    'open_mart_above_header_col3_set',
				    'open_mart_col1_texthtml',
				    'open_mart_col2_texthtml',
				    'open_mart_col3_texthtml',
				    'open_mart_col1_menu_redirect',
				    'open_mart_col2_menu_redirect',
				    'open_mart_col3_menu_redirect',
				    'open_mart_col1_widget_redirect',
				    'open_mart_col2_widget_redirect',
				    'open_mart_col3_widget_redirect',
				    'open_mart_col1_social_media_redirect',
				    'open_mart_col2_social_media_redirect',
				    'open_mart_col3_social_media_redirect',
				    'open_mart_abv_hdr_hgt',
				    'open_mart_abv_hdr_botm_brd',
				    'open_mart_above_brdr_clr',
				    
				],
				callback: function(layout){
					if (layout=='abv-none'){
					return false;
					}
					return true;
				   }
			},
            {
				controls: [    
				'open_mart_above_header_col2_set',  
				'open_mart_above_header_col3_set',
				
				],
				callback: function(layout){
					if(layout!=='abv-two'|| layout!=='abv-three' || layout!=='abv-none'){
					return false;
					}
					return true;
				}
			},
            
            {
				controls: [ 
				'open_mart_above_header_col1_set',   
				'open_mart_above_header_col2_set', 
				
				],
				callback: function(layout){
					if(layout=='abv-two' || layout=='abv-three'){
					return true;
					}
					return false;
				}
			},
            {
				controls: [ 
				'open_mart_above_header_col1_set', 
				],
				callback: function(layout){
					if(layout=='abv-one'|| layout=='abv-two' ||  layout=='abv-three'){
					return true;
					}
					return false;
				}
			},
            {
				controls: [ 
				'open_mart_above_header_col3_set',  
				],
				callback: function(layout){
					if(layout=='abv-three'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col1_texthtml',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col1_set' ).get();
					if((layout!== 'abv-none') && val=='text'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col1_menu_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col1_set' ).get();
					if((layout!== 'abv-none') && val=='menu'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col1_widget_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col1_set' ).get();
					if((layout!== 'abv-none') && val=='widget'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col1_social_media_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col1_set' ).get();
					if((layout!== 'abv-none') && val=='social'){
					return true;
					}
					return false;
				}
			},

// col2
			{
				controls: [    
				'open_mart_col2_texthtml',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col2_set' ).get();
					if((layout=='abv-two'||layout=='abv-three') && (val=='text')){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col2_menu_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col2_set' ).get();
					if((layout=='abv-two'||layout=='abv-three')  && (val=='menu')){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col2_widget_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col2_set' ).get();
					if((layout=='abv-two'||layout=='abv-three')  && (val=='widget')){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col2_social_media_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col2_set' ).get();
					if((layout=='abv-two'||layout=='abv-three')  && (val=='social')){
					return true;
					}
					return false;
				}
			},
    // col3

            {
				controls: [    
				'open_mart_col3_texthtml',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col3_set' ).get();
					if((layout== 'abv-three') && val=='text'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col3_widget_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col3_set' ).get();
					if((layout== 'abv-three') && val=='widget'){
					return true;
					}
					return false;
				}
			},	
			{
				controls: [    
				'open_mart_col3_menu_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col3_set' ).get();
					if((layout== 'abv-three') && val=='menu'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col3_social_media_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_col3_set' ).get();
					if((layout== 'abv-three') && val=='social'){
					return true;
					}
					return false;
				}
			},
					
		];
		// above header col1 setting
		OPNCustomizerToggles ['open_mart_above_header_col1_set'] = [
		    
		    {
				controls: [
				    
				'open_mart_col1_texthtml',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'text' && val!=='abv-none'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [    
				'open_mart_col1_menu_redirect',
				],
				callback: function(layout){
					var val = api( 'open_mart_above_header_layout' ).get();
					if(layout == 'menu' && val!=='abv-none'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [
				    
				'open_mart_col1_widget_redirect',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'widget' && val!=='abv-none'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [
				    
				'open_mart_col1_social_media_redirect',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'social' && val!=='abv-none'){
					return true;
					}
					return false;
				}
			},
			
			
			
		];
		// above header col2 setting
		OPNCustomizerToggles ['open_mart_above_header_col2_set'] = [
		    {
				controls: [    
				'open_mart_col2_texthtml',
				'open_mart_col2_widget_redirect',
				'open_mart_col2_menu_redirect',
				'open_mart_col2_social_media_redirect',   
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'none' || val=='abv-none'){
					return false;
					}
					return true;
				}
			},
		    {
				controls: [
				    
				'open_mart_col2_texthtml',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if ((layout == 'text') && (val=='abv-two'|| val=='abv-three')){
					return true;
					}
					return false;
				}
			},
			{
				controls: [
				    
				'open_mart_col2_menu_redirect',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if ((layout == 'menu') && (val=='abv-two'|| val=='abv-three')){
					return true;
					}
					return false;
				}
			},
			{
				controls: [
				    
				'open_mart_col2_widget_redirect',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if ((layout == 'widget') && (val=='abv-two'|| val=='abv-three')){
					return true;
					}
					return false;
				}
			},
			{
				controls: [
				    
				'open_mart_col2_social_media_redirect',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if ((layout == 'social') && (val=='abv-two'|| val=='abv-three')){
					return true;
					}
					return false;
				}
			},
			
		];
		// above header col3 setting
		OPNCustomizerToggles ['open_mart_above_header_col3_set'] = [
		    {
				controls: [    
				'open_mart_col3_texthtml',
				'open_mart_col3_widget_redirect',
				'open_mart_col3_menu_redirect',
				'open_mart_col3_social_media_redirect',   
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'none' && val!=='abv-three'){
					return false;
					}
					return true;
				}
			},
		    {
				controls: [
				    
				'open_mart_col3_texthtml',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'text' && val=='abv-three'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [
				    
				'open_mart_col3_widget_redirect',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'widget' && val=='abv-three'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [
				    
				'open_mart_col3_menu_redirect',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'menu' && val=='abv-three'){
					return true;
					}
					return false;
				}
			},
			{
				controls: [
				    
				'open_mart_col3_social_media_redirect',
				    
				],
				callback: function(layout){
                var val = api( 'open_mart_above_header_layout' ).get();
					if (layout == 'social' && val=='abv-three'){
					return true;
					}
					return false;
				}
			},
			
		];
		});
})( jQuery );