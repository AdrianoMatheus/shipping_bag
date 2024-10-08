/*
 * angular-material-icons v0.7.2
 * (c) 2014-2016 Klar Systems
 * License: MIT
 */

/* jshint -W097, -W101 */
'use strict';

angular.module('demoapp', ['ngMdIcons'])
    .controller('democtrl', ['$scope', function($scope) {
        var icons = [
            //
            //Material Icons
            //
            'amazon', 'apple', 'facebook-box', 'facebook-messenger', 'facebook', 'github-box', 'github-circle', 'google-plus-box', 'google-plus', 'hangouts', 'linkedin-box', 'linkedin', 'login', 'logout', 'office', 'twitter', 'whatsapp', 'windows', 'pin', 'pin_off',

            //
            //Custom Icons
            //
            'signal_wifi_0_bar', 'signal_wifi_1_bar', 'signal_wifi_2_bar', 'signal_wifi_3_bar', 'signal_cellular_connected_no_internet_0_bar', 'signal_cellular_connected_no_internet_1_bar', 'signal_cellular_connected_no_internet_2_bar', 'signal_cellular_connected_no_internet_3_bar', 'signal_cellular_0_bar', 'signal_cellular_1_bar', 'signal_cellular_2_bar', 'signal_cellular_3_bar', 'now_wallpaper', 'now_widgets', 'battery_20', 'battery_30', 'battery_50', 'battery_60', 'battery_80', 'battery_90', 'battery_alert', 'battery_charging_20', 'battery_charging_30', 'battery_charging_50', 'battery_charging_60', 'battery_charging_80', 'battery_charging_90', 'account_child',


            //
            //Google Material Icons
            //

            //action
            '3d_rotation', 'accessibility', 'accessible', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'add_shopping_cart', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'all_out', 'android', 'announcement', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'autorenew', 'backup', 'book', 'bookmark', 'bookmark_outline', 'bug_report', 'build', 'cached', 'camera_enhanced', 'card_giftcard', 'card_membership', 'card_travel', 'change_history', 'check_circle', 'chrome_reader_mode', 'class', 'code', 'compare_arrows', 'copyright', 'credit_card', 'dashboard', 'date_range', 'delete', 'delete_forever', 'description', 'dns', 'done', 'done_all', 'donut_large', 'donut_small', 'eject', 'euro_symbol', 'event', 'event_seat', 'exit_to_app', 'explore', 'extension', 'face', 'favorite', 'favorite_border', 'feedback', 'find_in_page', 'find_replace', 'fingerprint', 'flight_land', 'flight_takeoff', 'flip_to_back', 'flip_to_front', 'g_translate', 'gavel', 'get_app', 'gif', 'grade', 'group_work', 'help', 'help_outline', 'highlight_off', 'history', 'home', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'important_devices', 'info', 'info_outline', 'input', 'invert_colors', 'label', 'label_outline', 'language', 'launch', 'lightbulb_outline', 'line_style', 'line_weight', 'list', 'lock', 'lock_open', 'lock_outline', 'loyalty', 'markunread_mailbox', 'motorcycle', 'note_add', 'offline_pin', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pageview', 'pan_tool', 'payment', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'pets', 'picture_in_picture', 'picture_in_picture_alt', 'play_for_work', 'polymer', 'power_settings_new', 'pregnant_woman', 'print', 'query_builder', 'question_answer', 'receipt', 'record_voice_over', 'redeem', 'remove_shopping_cart', 'reorder', 'report_problem', 'restore', 'restore_page', 'room', 'rounded_corner', 'rowing', 'schedule', 'search', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_voice', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'speaker_notes', 'speaker_notes_off', 'spellcheck', 'star_rate', 'stars', 'store', 'subject', 'supervisor_account', 'swap_horiz', 'swap_vert', 'swap_vertial_circle', 'system_update_alt', 'tab', 'tab_unselected', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'timeline', 'toc', 'today', 'toll', 'touch_app', 'track_changes', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'turned_in', 'turned_in_not', 'update', 'verified_user', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'visibility', 'visibility_off', 'watch_later', 'work', 'youtube_searched_for', 'zoom_in', 'zoom_out',

            //alert
            'add_alert','error','error_outline','warning',

            //av
            'add_to_queue','airplay','album','art_track','av_timer','branding_watermark','call_to_action','closed_caption','equalizer','explicit','fast_forward','fast_rewind','featured_play_list','featured_video','fibre_dvr','fiber_manual_record','fibre_new','fibre_pin','fibre_smart_record','forward_10','forward_30','forward_5','games','hd','hearing','high_quality','my_library_add','my_library_books','my_library_music','loop','mic','mic_none','mic_off','movie','music_video','new_releases','not_interested','note','pause','pause_circle_filled','pause_circle_outline','play_arrow','play_circle_fill','play_circle_outline','playlist_add','playlist_add_check','playlist_play','queue','queue_music','queue_play_next','radio','recent_actors','remove_from_queue','repeat','repeat_one','replay','replay_10','replay_30','replay_5','shuffle','skip_next','skip_previous','slow_motion_video','snooze','sort_by_alpha','stop','subscriptions','subtitles','surround_sound','video_call','video_label','video_library','videocam','videocam_off','volume_down','volume_mute','volume_off','volume_up','web','web_asset',

            //communication
            'business', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'chat', 'chat_bubble', 'chat_bubble_outline', 'clear_all', 'comment', 'contact_mail', 'contact_phone', 'contacts', 'dialer_sip', 'dialpad', 'email', 'forum', 'import_contacts', 'import_export', 'invert_colors_off', 'live_help', 'location_off', 'location_on', 'mail_outline', 'message', 'no_sim', 'phone', 'phonelink_erase', 'phonelink_lock', 'phonelink_ring', 'phonelink_setup', 'portable_wifi_off', 'present_to_all', 'ring_volume', 'rss_feed', 'screen_share', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop_screen_share', 'swap_calls', 'textsms', 'voicemail', 'vpn_key',

            //content
            'add', 'add_box', 'add_circle', 'add_circle_outline', 'archive', 'backspace', 'block', 'clear', 'content_copy', 'content_cut', 'content_paste', 'create', 'delete_sweep', 'drafts', 'filter_list', 'flag', 'font_download', 'forward', 'gesture', 'inbox', 'link', 'low_priority', 'mail', 'markunread', 'move_to_inbox', 'next_week', 'redo', 'remove', 'remove_circle', 'remove_circle_outline', 'reply', 'reply_all', 'report', 'save', 'select_all', 'send', 'sort', 'text_format', 'unarchive', 'undo', 'weekend',

            //device
            'access_alarms', 'access_alarm', 'access_time', 'add_alarm', 'airplanemode_on', 'airplanemode_inactive', 'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'bluetooth', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'data_usage', 'developer_mode', 'devices', 'dvr', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'graphic_eq', 'location_disabled', 'location_searching', 'network_cell', 'network_wifi', 'nfc', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'sd_storage', 'settings_system_daydream', 'signal_cellular_4_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'storage', 'usb', 'wallpaper', 'wifi_lock', 'wifi_tethering',

            //editor
            'attach_file', 'attach_money', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'bubble_chart', 'drag_handle', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underline', 'functions', 'highlight', 'insert_chart', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'linear_scale', 'merge_type', 'mode_comment', 'mode_edit', 'monetization_on', 'money_off', 'multiline_chart', 'pie_chart', 'pie_chart_outline', 'publish', 'short_text', 'show_chart', 'space_bar', 'strikethrough_s', 'text_fields', 'title', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'wrap_text',

            //file
            'attachment', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'create_new_folder', 'file_download', 'file_upload', 'folder', 'folder_open', 'folder_shared',

            //hardware
            'cast', 'cast_connected', 'computer', 'desktop_mac', 'desktop_windows', 'developer_dashboard', 'device_hub', 'devices_other', 'dock', 'gamepad', 'headset', 'headset_mic', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'memory', 'mouse', 'phone_android', 'phone_iphone', 'phonelink', 'phonelink_off', 'power_input', 'router', 'scanner', 'security', 'sim_card', 'smartphone', 'speaker', 'speaker_group', 'tablet', 'tablet_android', 'tablet_mac', 'toys', 'tv', 'vidiogame_asset', 'watch',

            //image
            'add_a_photo', 'add_to_photos', 'adjust', 'assistant_photo', 'audiotrack', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'broken_image', 'brush', 'burst_mode', 'camera', 'camera_alt', 'camera_front', 'camera_rear', 'camera_roll', 'center_focus_strong', 'center_focus_weak', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'compare', 'control_point', 'control_point_duplicate', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'dehaze', 'details', 'edit', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flip', 'gradient', 'grain', 'grid_off', 'grid_on', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'healing', 'image', 'image_aspect_ratio', 'iso', 'landscape', 'leak_add', 'leak_remove', 'lens', 'linked_camera', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loupe', 'monochrome_photos', 'movie_creation', 'movie_filter', 'music_note', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'palette', 'panorama', 'panorama_fisheye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'portrait', 'remove_red_eye', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'slideshow', 'straighten', 'style', 'switch_camera', 'switch_video', 'tag_faces', 'texture', 'timelapse', 'timer', 'timer_10', 'timer_3', 'timer_off', 'tonality', 'transform', 'tune', 'view_comfy', 'view_compact', 'vignette', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_irradescent', 'wb_sunny',

            //maps
            'add_location', 'beenhere', 'directions', 'directions_bike', 'directions_bus', 'directions_car', 'directions_ferry', 'directions_subway', 'directions_train', 'directions_transit', 'directions_walk', 'edit_location', 'ev_station', 'flight', 'hotel', 'layers', 'layers_clear', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_print_shop', 'local_restaurant', 'local_see', 'local_shipping', 'local_taxi', 'map', 'my_location', 'navigation', 'near_me', 'person_pin_circle', 'person_pin', 'pin_drop', 'place', 'rate_review', 'restaurant', 'restaurant_menu', 'satellite', 'store_mall_directory', 'streetview', 'subway', 'terrain', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'zoom_out_map',

            //navigation
            'apps', 'arrow_back', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_upward', 'cancel', 'check', 'chevron_left', 'chevron_right', 'close', 'expand_less', 'expand_more', 'first_page', 'fullscreen', 'fullscreen_exit', 'last_page', 'menu', 'more_horiz', 'more_vert', 'refresh', 'subdirectory_arrow_left', 'subdirectory_arrow_right',

            //notification
            'adb', 'airline_seat_flat', 'airline_seat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'bluetooth_audio', 'confirmation_number', 'disc_full', 'do_not_disturb', 'do_not_disturb_alt', 'do_not_disturb_off', 'do_not_disturb_on', 'drive_eta', 'enhanced_encryption', 'event_available', 'event_busy', 'event_note', 'folder_special', 'live_tv', 'mms', 'more', 'network_check', 'network_locked', 'no_encryption', 'ondemand_video', 'personal_video', 'phone_bluetooth_speaker', 'phone_forwarded', 'phone_in_talk', 'phone_locked', 'phone_missed', 'phone_paused', 'power', 'priority_high', 'sd_card', 'sim_card_alert', 'sms', 'sms_failed', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'tap_and_play', 'time_to_leave', 'vibration', 'voice_chat', 'vpn_lock', 'wc', 'wifi',

            //places
            'ac_unit', 'airport_shuttle', 'all_inclusive', 'beach_access', 'business_center', 'casino', 'child_care', 'child_friedly', 'fitness_center', 'free_breakfast', 'golf_course', 'hot_tub', 'kitchen', 'pool', 'room_service', 'rv_hookup', 'smoke_free', 'smoke_rooms', 'spa',

            //social
            'cake', 'domain', 'group', 'group_add', 'location_city', 'mood', 'mood_bad', 'notifications', 'notifications_none', 'notifications_off', 'notifications_active', 'notifications_paused', 'pages', 'party_mode', 'people', 'people_outline', 'person', 'person_add', 'person_outline', 'plus_one', 'poll', 'public', 'school', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'share', 'whatshot',

            //toggle
            'check_box', 'check_box_outline_blank', 'indeterminate_check_box', 'radio_button_unchecked', 'radio_button_checked', 'star', 'star_half', 'star_border'
        ];
        var colors = ['lightgreen', 'pink', 'wheat', '#cc99ff', '#abcdef'];
        $scope.cnt = Math.floor(Math.random() * icons.length);
        $scope.icon = icons[$scope.cnt];
        $scope.fill = colors[0];
        $scope.size = 48;

        $scope.clickIcon = 'thumb_up';
        $scope.clickIconMorph = function() {
            if ($scope.clickIcon === 'thumb_up') {
                $scope.clickIcon = 'thumb_down';
            }
            else {
                $scope.clickIcon = 'thumb_up';
            }
        };

        setInterval(function() {
            var random = Math.random();
            if (random < 0.2) {
                $scope.size = 28 + 4 * Math.floor(Math.random() * 9);
            } else {
                $scope.cnt++;
                if ($scope.cnt >= icons.length) {
                    $scope.cnt = 0;
                }
                $scope.icon = icons[$scope.cnt];
                $scope.fill = colors[Math.floor(Math.random() * colors.length)];
            }
            $scope.$apply();
        }, 1700);
    }])
    .config(['ngMdIconServiceProvider', function(ngMdIconServiceProvider) {
        ngMdIconServiceProvider
            // Add single icon
            .addShape('standby', '<path d="M13 3.5h-2v10h2v-10z"/><path d="M16.56 5.94l-1.45 1.45C16.84 8.44 18 10.33 18 12.5c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.94C5.36 7.38 4 9.78 4 12.5c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56z"/>')
            // Get an existing icon
            .addShape('custom-delete', ngMdIconServiceProvider.getShape('delete'))
            // Add multiple icons
            .addShapes({
                'marker': '<path d="M18.632 8.21A6.632 6.632 0 0 1 12 14.843a6.632 6.632 0 0 1-6.632-6.63A6.632 6.632 0 0 1 12 1.578a6.632 6.632 0 0 1 6.632 6.63zM12 0C7.465 0 3.79 3.676 3.79 8.21c0 3.755 2.52 6.917 5.96 7.895L12 24l2.25-7.895c3.44-.978 5.96-4.14 5.96-7.894C20.21 3.677 16.536 0 12 0z">',
                'live_circle': '<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 9.094h1.188v4.844h2.53v.968H4V9.094zm4.5 0h1.188v5.812H8.5V9.094zm1.78 0h1.345l1.28 4.375 1.345-4.377h1.313l-2 5.812h-1.25l-2.033-5.81zm5.845 0H20v.97l-2.688-.002v1.376h2.282v.937h-2.282v1.563H20v.968h-3.875V9.094z"/>'
            });
    }]);