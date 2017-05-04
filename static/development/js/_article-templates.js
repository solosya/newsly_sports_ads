/**
 * Handlebar Article templates for listing
 */

var systemCardTemplate = '<div itemscope itemtype="http://schema.org/NewsArticle"  class="article {{containerClass}} ">'+
        '<meta itemscope itemprop="mainEntityOfPage"  itemType="https://schema.org/WebPage" itemid="https://google.com/article"/>'+
        '<div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">'+
            '{{#if imageUrl}}'+
                '<meta itemprop="url" content="{{imageUrl}}"/>'+
            '{{else}}'+
                '<meta itemprop="url" content="https://placeholdit.imgix.net/~text?txtsize=33&txt=Loading&w=450&h=250"/>'+
            '{{/if}}'+
            '<meta itemprop="width" content="500"/>'+
            '<meta itemprop="height" content="500"/>'+
        '</div>'+
        '<div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">'+
            '<meta itemprop="name" content="{{blog.title}}"/>'+
            '<div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">'+
                '{{#if blog.media.structured.url}}'+
                    '<meta itemprop="url" content="{{blog.media.structured.url}}"/>'+
                    '<meta itemprop="width" content="{{blog.media.structured.width}}"/>'+
                    '<meta itemprop="height" content="{{blog.media.structured.height}}"/>'+
                '{{else}}'+
                    '<meta itemprop="url" content="https://placeholdit.imgix.net/~text?txtsize=33&txt=No Image&w=600&h=60"/>'+
                    '<meta itemprop="width" content="600"/>'+
                    '<meta itemprop="height" content="60"/>'+
                '{{/if}}'+
            '</div>'+
        '</div>'+
        '<meta itemprop="datePublished" content="{{metaPublishDate}}"/>'+
        '<meta itemprop="dateModified" content="{{metaUpdateDate}}"/>'+
        '<a itemprop="url" href="{{url}}" class="card swap card__news {{hasArticleMediaClass}} {{promotedClass}} {{blogClass}}" data-id="{{articleId}}" data-position="{{position}}" data-social="0" data-article-image="{{{imageUrl}}}" data-article-text="{{title}}">'+
            '{{#if hasMedia}}  '+
              '<div class="card-image lazyload" data-original="{{imageUrl}}" style="background-image:url(https://placeholdit.imgix.net/~text?txtsize=33&txt=Loading&w=450&h=250);"></div>'+
            '{{/if}}'+
            '<div class="content-section">'+
                '<div class="title-section">'+
                    '<span>{{label}}</span>'+
                    '<div class="card-icon"></div>'+
                '</div>'+
                '<h1 itemprop="headline" class="heading-section">{{{title}}}</h1>'+
                '<p itemprop="description" class="description">{{{excerpt}}}</p>'+
                '<div class="caption_bottom" itemprop="author" itemscope itemtype="https://schema.org/Person">'+
                    '<div class="author_name" itemprop="name">{{createdBy.displayName}}</div>'+
                    '<div class="post_date">{{publishDate}}</div>'+
                    '<span class="category_share_icon shareIcons"><i class="fa fa-share-alt"></i></span>'+
                '</div>'+
            '</div>'+
            '{{#if userHasBlogAccess}}'+
                '<div class="btn_overlay articleMenu">'+
                    '<button title="Hide" data-guid="{{guid}}" class="btnhide social-tooltip HideBlogArticle" type="button" data-social="0">'+
                        '<i class="fa fa-eye-slash"></i><span class="hide">Hide</span>'+
                    '</button>'+
                    '<button onclick="window.location=\'{{{editUrl}}}\'; return false;" title="Edit" class="btnhide social-tooltip" type="button">'+
                        '<i class="fa fa-edit"></i><span class="hide">Edit</span>'+
                    '</button>'+
                    '<button data-position="{{position}}" data-social="0" data-id="{{articleId}}" title="{{pinTitle}}" class="btnhide social-tooltip PinArticleBtn" type="button" data-status="{{isPinned}}">'+
                        '<i class="fa fa-thumb-tack"></i><span class="hide">{{pinText}}</span>'+
                    '</button>'+
                '</div>'+
                "{{/if}}"+
            '</a>'+
        '</div>';
                                                
var socialCardTemplate =  '<div class="{{containerClass}}">' +
                                '<a href="{{social.url}}" target="_blank" class="card swap card__{{social.source}} {{#if social.hasMedia}} withImage__content {{else }} without__image {{/if}} {{videoClass}}" data-id="{{socialId}}" data-position="{{position}}" data-social="1" data-article-image="{{{social.media.path}}}" data-article-text="{{social.content}}">'+
                                    '{{#if social.hasMedia}}'+
                                    '<div class="card-image lazyload" data-original="{{social.media.path}}" style="background-image:url(https://placeholdit.imgix.net/~text?txtsize=33&txt=Loading&w=450&h=250)">'+
                                        '<div class="play_icon video-player" data-source="{{social.source}}" data-url="{{social.media.videoUrl}}" data-poster="{{social.media.path}}"></div>'+
                                    '</div>' +
                                    '{{/if}}'+
                                    '<div class="content-section">' +
                                        '<div class="title-section">' +
                                            '<span>{{social.source}}</span>' +
                                            '<div class="card-icon"></div>' +
                                        '</div>' +
                                        '<p class="description" id="updateSocial{{socialId}}" data-update="0">{{{social.content}}}</p>' +
                                        '<div class="caption_bottom">' +
                                            '<div class="author_name">{{social.user.name}}</div>' +
                                            '<div class="post_date">{{social.publishDate}}</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '{{#if userHasBlogAccess}}'+
                                        '<div class="btn_overlay articleMenu">'+
                                            '<button title="Hide" data-guid="{{social.guid}}" class="btnhide social-tooltip HideBlogArticle" type="button" data-social="1">'+
                                                '<i class="fa fa-eye-slash"></i><span class="hide">Hide</span>'+
                                            '</button>'+
                                            '<button title="Edit" class="btnhide social-tooltip editSocialPost" type="button" data-url="/admin/social-funnel/update-social?guid={{blog.guid}}&socialguid={{social.guid}}">'+
                                            '<i class="fa fa-edit"></i><span class="hide">Edit</span>'+
                                            '</button>'+
                                            '<button data-position="{{position}}" data-social="1" data-id="{{socialId}}" title="{{pinTitle}}" class="btnhide social-tooltip PinArticleBtn" type="button" data-status="{{isPinned}}">'+
                                                '<i class="fa fa-thumb-tack"></i><span class="hide">{{pinText}}</span>'+
                                            '</button>'+
                                        '</div>'+
                                    '{{/if}}'+   
                                '</a>' +
                            '</div>';