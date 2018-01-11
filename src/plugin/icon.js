import Vue from "vue";

/**
 * awesome 图标
 * How to use:
 * one:
 * <icon name="refresh" scale="2" spin></icon>
 * <icon name="comment" flip="horizontal"></icon>
 * <icon name="code-fork" label="Forked Repository"></icon>
 *
 * group:
 * <icon label="No Photos">
 *     <icon name="camera"></icon>
 *     <icon name="ban" scale="2" class="alert"></icon>
 * </icon>
 */
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

Vue.component("icon", Icon);
