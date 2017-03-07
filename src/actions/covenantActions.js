import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';

export const SUBSCRIPTIONS = "SUBSCRIPTIONS"

const COVENANT_URL = "https://covenant.expresso.store/api";
const USER_SUBSCRIPTIONS_URL = COVENANT_URL + "/user/subscription";
const ROASTER_SUBSCRIPTIONS_URL = COVENANT_URL + "/roaster/subscription";
const SUBSCRIPTION_URL = COVENANT_URL + "subscription";

export function createSubscription(body) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL, "POST", body);
}

export function getSubscription(id) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL + "/" + id, "GET");
}

export function getSubscriptionsByUser(id, offset, limit) {
	return ActionUtil.handlePageRequest(ActionTypes.REQUEST_SUBSCRIPTIONS_BY_USER, USER_SUBSCRIPTIONS_URL+ id + "?offset=" + offset + "&limit=" + limit, "GET", offset, limit);
}

export function getSubscriptionsByRoaster(id, offset, limit) {
	return ActionUtil.handlePageRequest(ActionTypes.REQUEST_SUBSCRIPTIONS_BY_ROASTER, ROASTER_SUBSCRIPTIONS_URL + id + "?offset=" + offset + "&limit=" + limit, "GET", offset, limit);
}

export function getAllSubscriptions(offset, limit) {
	return ActionUtil.handlePageRequest(ActionTypes.REQUEST_ALL_SUBSCRIPTIONS, SUBSCRIPTION_URL+"?offset=" + offset + "&limit=" + limit);
}

export function updateSubscription(id) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL + "/" + id, "PUT");
}

export function deleteSubscription(id) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL + "/" + id, "DELETE");
}
